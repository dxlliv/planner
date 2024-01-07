import * as fflate from 'fflate';
import { getFileExtension } from "./utilsFile";
import { singularizeMediaCollectionName } from "./utilsUserMedia";

/**
 * Resolve media file promises for media export into indexed db
 *
 * @param mediaList
 */
export async function fulfillMediaFilesForExport(mediaList: IMedia[]): Promise<any> {
    const result = []

    for await (const media of mediaList) {
        result.push(await media.export())
    }

    return result
}

/**
 * Rebuild raw user config from exported user data
 *
 * @param user
 */
function rebuildUserConfigFromUserExported(userExported: IUserExported) {
    const userConfig = {
        profile: {},
        media: {}
    }

    // assign copy of the profile to userConfig
    userConfig.profile = {...userExported.profile}

    if (userConfig.profile.avatar) {
        // replace avatar file with avatar file name
        userConfig.profile.avatar = `avatar.${getFileExtension(userConfig.profile.avatar.name)}`
    }

    let i = 0
    let iAlbumItem = 0

    // assign copy of the media to userConfig
    userConfig.media = {...userExported.media}

    // for each media collection
    for (const collection of Object.keys(userConfig.media)) {
        const singularizedCollectionName = singularizeMediaCollectionName(collection)

        userConfig.media[collection] = []

        // for each media in this collection
        for (const media of userConfig.media[collection]) {
            switch (media.type) {

                case 'album':
                    let album = []

                    for (const albumItemMedia of media.list) {
                        const fileName = `${singularizedCollectionName}-${i}x${iAlbumItem}.${getFileExtension(albumItemMedia.file.name)}`

                        if (albumItemMedia.file) {
                            // set the filename as name
                            albumItemMedia.name = fileName
                            delete albumItemMedia.file
                        }

                        album.push(albumItemMedia)

                        iAlbumItem++
                    }


                    // set it
                    userConfig.media[collection].push(album)
                    break;

                default:
                    const fileName = `${singularizedCollectionName}-${i}.${getFileExtension(media.file.name)}`

                    // get name from media
                    if (media.file) {
                        media.name = fileName
                        delete media.file
                    }

                    // set it
                    userConfig.media[collection].push(media)
                    break;

            }

            i++
        }
    }

    return userConfig
}

/**
 * Prepare user zip config to generate the zip file
 *
 * @param user
 */
async function prepareUserZipConfig(user: IUserExported) {
    async function fileToArrayBuffer(file) {
        return new Uint8Array(await file.arrayBuffer())
    }

    const username = user.profile.username
    const userZip = {}

    userZip[username] = {}

    if (user.profile.avatar) {
        userZip[username][`avatar.${getFileExtension(user.profile.avatar.name)}`] = [
          await fileToArrayBuffer(user.profile.avatar), { level: 0 }
        ]
    }

    let i = 0
    let iAlbumItem = 0

    userZip[username]['media'] = {}

    // for each media collection
    for (const collection of Object.keys(user.media)) {
        const singularizedCollectionName = singularizeMediaCollectionName(collection)

        i = 0

        // for each media in this collection
        for (const media of user.media[collection]) {

            switch (media.type) {

                case 'album':
                    iAlbumItem = 0

                    let album = {}

                    for (const albumItemMedia of media.list) {
                        const fileName = `${singularizedCollectionName}-${i}x${iAlbumItem}.${getFileExtension(albumItemMedia.file.name)}`

                        // define media image
                        userZip[username]['media'][fileName] = [
                            await fileToArrayBuffer(albumItemMedia.file), { level: 0 }
                        ]

                        iAlbumItem++
                    }
                    break;

                default:
                    const fileName = `${singularizedCollectionName}-${i}.${getFileExtension(media.file.name)}`

                    // define media image
                    userZip[username]['media'][fileName] = [
                        await fileToArrayBuffer(media.file), { level: 0 }
                    ]
                    break;

            }

            i++
        }
    }

    // define config.json
    userZip[username]['config.json'] = fflate.strToU8(
      JSON.stringify(rebuildUserConfigFromUserExported(user))
    )

    return userZip
}

/**
 * Prepare user zip config from exported user data
 * and build the zip file
 *
 * @param userExported
 */
export async function makeUserZip(userExported: IUserExported) {
    const userZipConfig = await prepareUserZipConfig(userExported)

    const userZip = fflate.zipSync(userZipConfig)

    return userZip
}