import { getFileExtension } from "./utilsFile"

/**
 * Depending on media type,
 * rebuild original raw media
 *
 * @param media
 * @param mediaIndex
 * @param isAlbumIndex
 */
async function generateRawMedia(
  media: any,
  mediaIndex: number,
  isAlbumIndex: number = -1,
) {
  let rawMediaConfig = { ...media.exportConfig() }

  let rawMediaFileName = `${media.collectionSingularized}-${mediaIndex}`
  if (isAlbumIndex > -1) rawMediaFileName += `x${isAlbumIndex}`

  switch (media.type) {
    case "album":
      let albumMediaIndex = 1
      let albumItems = []

      // run generateRawMedia for each album item
      if (media.list) {

        for await (const albumItemMedia of media.list) {
          const rawAlbumMedia = await generateRawMedia(
            albumItemMedia,
            mediaIndex,
            albumMediaIndex,
          )

          albumItems.push(rawAlbumMedia)

          albumMediaIndex++
        }
      }

      return {
        ...rawMediaConfig,
        list: albumItems
      }

    case "iframe":
      if (media.cover) {
        rawMediaConfig.cover = media.cover.exportWithDesiredName(`${mediaIndex}-cover`)
      }

      return {
        ...rawMediaConfig,
      }

    case "video":
      rawMediaConfig.name = media.exportWithDesiredName(`${mediaIndex}`)

      if (media.cover) {
        rawMediaConfig.cover = media.cover.exportWithDesiredName(`${mediaIndex}-cover`)
      }

      return {
        ...rawMediaConfig,
      }

    case "image":
      return {
        ...rawMediaConfig,
        name: media.exportWithDesiredName(mediaIndex),
      }
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
      const rawMedia = await generateRawMedia(media, i)

      rawUser.media[collectionKey].push(rawMedia)

      i++
    }
  }

  return rawUser
}
