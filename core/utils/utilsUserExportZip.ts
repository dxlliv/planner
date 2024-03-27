import * as fflate from "fflate"
import { getFileExtension } from "./utilsFile"
import { rebuildRawUserConfig } from "./utilsUserExportRawConfig"

async function fileToArrayBuffer(file: File) {
  return new Uint8Array(await file.arrayBuffer())
}

async function prepareMediaForZip(
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
      let iAlbumItem = 1

      // run rebuildRawMedia for each album item
      for await (const albumItemMedia of media.list) {
        const albumMediaFiles = await prepareMediaForZip(
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
      exportedMedia = await media.exportFiles()

      if (media.cover) {
        mediaFiles[
          `${rawMediaFileName}-cover.${getFileExtension(
            exportedMedia.cover.file.name,
          )}`
        ] = [await fileToArrayBuffer(exportedMedia.cover.file), { level: 0 }]
      }
      break

    case "video":
      exportedMedia = await media.exportFiles()

      if (media.cover) {
        mediaFiles[
          `${rawMediaFileName}-cover.${getFileExtension(
            exportedMedia.cover.file.name,
          )}`
        ] = [await fileToArrayBuffer(exportedMedia.cover.file), { level: 0 }]
      }

      mediaFiles[
        `${rawMediaFileName}.${getFileExtension(exportedMedia.file.name)}`
      ] = [await fileToArrayBuffer(exportedMedia.file), { level: 0 }]
      break

    case "image":
      exportedMedia = await media.exportFiles()

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
async function prepareUserForZip(user: IUser) {
  const userConfigJson = await rebuildRawUserConfig(user)

  const username = user.profile.username
  const userZip = {}

  userZip[username] = {}

  if (user.profile.avatar && user.profile.avatar.isSet) {
    const avatarFile = await user.profile.avatar.export()

    userZip[username][userConfigJson.profile.avatar] = [
      await fileToArrayBuffer(avatarFile),
      { level: 0 },
    ]
  }

  let i = 1

  let mediaFiles = {}

  // for each media collection
  for (const collectionKey of user.media.collectionKeys) {
    i = 1

    const mediaCollectionItems = [...user.media.collections[collectionKey]].reverse()

    // for each media in this collection
    for (const media of mediaCollectionItems) {
      const partialMediaFiles = await prepareMediaForZip(media, i)

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
  const userZipConfig = await prepareUserForZip(user)

  const userZip = fflate.zipSync(userZipConfig)

  return userZip
}
