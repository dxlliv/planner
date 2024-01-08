import * as fflate from "fflate"
import { getFileExtension } from "./utilsFile"
import { singularizeMediaCollectionName } from "./utilsUserMedia"
import { rebuildRawUserConfigFromUser } from "./utilsUserExportRebuildRawConfig"
import { IMedia } from "../types"

async function fileToArrayBuffer(file) {
  return new Uint8Array(await file.arrayBuffer())
}

async function asdasd(
  media: IMedia,
  mediaIndex: number,
  isAlbumIndex: number = -1,
) {
  const mediaFiles = {}

  let exportedMedia
  let exportedMediaCover

  let rawMediaFileName = `${media.collectionSingularized}-${mediaIndex}`
  if (isAlbumIndex > -1) rawMediaFileName += `x${isAlbumIndex}`

  switch (media.type) {
    case "album":
      let iAlbumItem = 0

      let rawAlbumItemMedia

      // run rebuildRawMedia for each album item
      for await (const albumItemMedia of media.list) {
        const albumMediaFiles = await asdasd(
          albumItemMedia,
          mediaIndex,
          iAlbumItem,
        )

        for (const albumMediaFileKey of Object.keys(albumMediaFiles)) {
          mediaFiles[albumMediaFileKey] = albumMediaFiles[albumMediaFileKey]
        }

        iAlbumItem++
      }

      break
    case "iframe":
      if (media.cover) {
        exportedMediaCover = await media.cover.export()

        mediaFiles[
          `${rawMediaFileName}-cover.${getFileExtension(
            exportedMediaCover.file.name,
          )}`
        ] = [await fileToArrayBuffer(exportedMediaCover.file), { level: 0 }]
      }
      break

    case "video":
      if (media.cover) {
        exportedMediaCover = await media.cover.export()

        mediaFiles[
          `${rawMediaFileName}-cover.${getFileExtension(
            exportedMediaCover.file.name,
          )}`
        ] = [await fileToArrayBuffer(exportedMediaCover.file), { level: 0 }]
      }

      exportedMedia = await media.export()

      mediaFiles[
        `${rawMediaFileName}.${getFileExtension(exportedMedia.file.name)}`
      ] = [await fileToArrayBuffer(exportedMedia.file), { level: 0 }]
      break

    case "image":
      exportedMedia = await media.export()

      mediaFiles[
        `${rawMediaFileName}.${getFileExtension(exportedMedia.file.name)}`
      ] = [await fileToArrayBuffer(exportedMedia.file), { level: 0 }]
      break
  }

  return mediaFiles
}

/**
 * Prepare user zip config to generate the zip file
 *
 * @param user
 */
async function prepareUserZipConfig(user: IUser) {
  const userConfigJson = await rebuildRawUserConfigFromUser(user)

  const username = user.profile.username
  const userZip = {}

  userZip[username] = {}

  if (user.profile.avatar.isSet) {
    const avatarFile = await user.profile.avatar.export()

    userZip[username][userConfigJson.profile.avatar] = [
      await fileToArrayBuffer(avatarFile),
      { level: 0 },
    ]
  }

  let i = 0

  let mediaFiles = {}

  // for each media collection
  for (const collectionKey of user.media.collectionKeys) {
    i = 0

    // for each media in this collection
    for (const media of user.media.collections[collectionKey]) {
      const partialMediaFiles = await asdasd(media, i)

      mediaFiles = {
        ...mediaFiles,
        ...partialMediaFiles,
      }

      i++
    }
  }

  // define config.json
  userZip[username]["config.json"] = fflate.strToU8(
    JSON.stringify(userConfigJson),
  )

  // define files in media folder
  userZip[username]["media"] = mediaFiles

  return userZip
}

/**
 * Prepare user zip config from exported user data
 * and build the zip file
 *
 * @param user
 */
export async function makeUserZip(user: IUser) {
  const userZipConfig = await prepareUserZipConfig(user)

  const userZip = fflate.zipSync(userZipConfig)

  return userZip
}
