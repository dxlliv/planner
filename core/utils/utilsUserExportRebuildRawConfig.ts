import { getFileExtension } from "./utilsFile"

/**
 * Rebuild media config replacing .file with .original .name
 *
 * @param filename
 * @param media
 */
function generateOriginalRawMedia(filename: string, media: IMedia) {
  let rawMedia = { ...media }

  if (rawMedia.file) {
    // get name from media
    const fileNameWithExtension = `${filename}.${getFileExtension(
      rawMedia.file.name,
    )}`

    // set name to raw media config
    rawMedia.name = fileNameWithExtension

    // delete file since it's the raw media config
    delete rawMedia.file
  }

  return rawMedia
}

/**
 * Depending on media type,
 * rebuild original raw media
 *
 * @param media
 * @param mediaIndex
 * @param isAlbumIndex
 */
async function rebuildRawMedia(
  media: IMedia,
  mediaIndex: number,
  isAlbumIndex: number = -1,
) {
  let rawMedia = await media.export()

  let rawMediaFileName = `${media.collectionSingularized}-${mediaIndex}`
  if (isAlbumIndex > -1) rawMediaFileName += `x${isAlbumIndex}`

  switch (media.type) {
    case "album":
      let iAlbumItem = 1
      let rawAlbum = []

      let rawAlbumItemMedia

      // run rebuildRawMedia for each album item
      for await (const albumItemMedia of media.list) {
        const rawAlbumItemMedia = await rebuildRawMedia(
          albumItemMedia,
          mediaIndex,
          iAlbumItem,
        )

        rawAlbum.push(rawAlbumItemMedia)

        iAlbumItem++
      }

      return rawAlbum

    case "iframe":
      if (media.cover && media.cover.file) {
        const rawMediaCover = await media.cover.export()
        rawMedia.cover = generateOriginalRawMedia(
          `${rawMediaFileName}-cover`,
          rawMediaCover,
        )
      }

      return rawMedia

    case "video":
      if (media.cover) {
        const rawMediaCover = await media.cover.export()
        rawMedia.cover = generateOriginalRawMedia(
          `${rawMediaFileName}-cover`,
          rawMediaCover,
        )
      }

      return generateOriginalRawMedia(rawMediaFileName, rawMedia)

    case "image":
      return generateOriginalRawMedia(rawMediaFileName, rawMedia)
  }
}

/**
 * Rebuild raw user config from exported user data
 *
 * @param user
 */
export async function rebuildRawUserConfigFromUser(user: IUser) {
  const rawUser = {
    profile: {},
    media: {},
  }

  // assign copy of the profile to rawUser
  rawUser.profile = await user.profile.export()

  if (rawUser.profile.avatar) {
    // replace avatar file with avatar file name
    rawUser.profile.avatar = `avatar.${getFileExtension(
      rawUser.profile.avatar.name,
    )}`
  }

  let i = 1

  // for each media collection
  for (const collectionKey of user.media.collectionKeys) {
    i = 1

    rawUser.media[collectionKey] = []

    const mediaCollectionItems = [...user.media.collections[collectionKey]].reverse()

    // for each media in this collection
    for (const media of mediaCollectionItems) {
      rawUser.media[collectionKey].push(await rebuildRawMedia(media, i))

      i++
    }
  }

  return rawUser
}
