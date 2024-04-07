import { exportWithDesiredName, getFileExtension } from "./utilsFile"

/**
 * Rebuild raw user config from exported user data
 *
 * @param user
 */
export async function rebuildRawUserConfig(user: IUser) {
  const rawUser = {
    profile: {},
    media: {},
  } as IRawUser

  rawUser.profile = await rebuildRawUserProfileConfig(user)
  rawUser.media = await rebuildRawUserMediaConfig(user)

  return rawUser
}

/**
 * Rebuild raw user profile config
 *
 * @param user
 */
export async function rebuildRawUserProfileConfig(user: IUser) {
  let rawUserProfile = {} as IRawUserProfile

  // assign copy of the profile to rawUser
  rawUserProfile = await user.profile.export()

  if (rawUserProfile.avatar && typeof rawUserProfile.avatar !== 'string') {
    // replace avatar file with avatar file name
    rawUserProfile.avatar = `avatar.${getFileExtension(
      rawUserProfile.avatar.name,
    )}`
  }

  return rawUserProfile
}

/**
 * Rebuild raw user media config
 *
 * @param user
 */
export async function rebuildRawUserMediaConfig(user: IUser) {
  const rawUserMedia = {} as IRawUserMedia

  let i: number

  // for each media collection
  for (const collectionKey of user.media.collectionKeys) {
    i = user.media.collections[collectionKey].length

    rawUserMedia[collectionKey] = []

    const mediaCollectionItems = [...user.media.collections[collectionKey]]

    // for each media in this collection
    for (const media of mediaCollectionItems) {
      const rawMedia = await rebuildRawMediaConfig(media, i)

      rawUserMedia[collectionKey].push(rawMedia)

      i--
    }
  }

  return rawUserMedia
}

/**
 * Depending on media type,
 * rebuild original raw media
 *
 * @param media
 * @param mediaIndex
 * @param mediaAlbumIndex
 */
async function rebuildRawMediaConfig(
  media: any,
  mediaIndex: number,
  mediaAlbumIndex: number = -1,
) {
  let rawMediaConfig = { ...media.exportConfig() }

  let rawMediaFileName: string = `${media.collectionSingularized}-${mediaIndex}`
  if (mediaAlbumIndex > -1) rawMediaFileName += `x${mediaAlbumIndex}`

  switch (media.type) {
    case "album":
      let albumMediaIndex = 1
      let albumItems = []

      // run rebuildRawMediaConfig for each album item
      if (media.list) {

        for await (const albumItemMedia of media.list) {
          const rawAlbumMedia = await rebuildRawMediaConfig(
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
      await media.fetch()

      if (media.cover) {
        rawMediaConfig.cover = exportWithDesiredName(
          await media.cover.file,
          `${rawMediaFileName}-cover`
        )
      }

      return {
        ...rawMediaConfig,
      }

    case "video":
      await media.fetch()

      rawMediaConfig.name = exportWithDesiredName(
        await media.file,
        rawMediaFileName
      )

      if (media.cover) {
        await media.cover.fetch()

        rawMediaConfig.cover = exportWithDesiredName(
          await media.cover.file,
          `${rawMediaFileName}-cover`
        )
      }

      return {
        ...rawMediaConfig,
      }

    case "image":
      await media.fetch()

      // it's an album's image,
      // return just the name
      // (no caption or other properties)
      if (mediaAlbumIndex > -1) {
        return {
          name: exportWithDesiredName(
            await media.file,
            rawMediaFileName
          )
        }
      }

      // return raw image config
      return {
        ...rawMediaConfig,
        name: exportWithDesiredName(
          await media.file,
          rawMediaFileName
        )
      }
  }
}