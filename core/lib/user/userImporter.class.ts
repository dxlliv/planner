import { openUserDirectory, parseUserProfileConfigFromFileDirectory } from "£/utils/utilsUserProfile"
import { parseUserPlatform } from "£/utils/utilsPlatform"
import UserMedia from "£/lib/user/userMedia.class"
import { usePlatformStructure } from "£/composables/composablePlatformStructure"

export default class UserImporter {
  private directory: any = null
  private platform: IUserPlatform = "" as IUserPlatform

  private rawUser: IRawUser = {} as IRawUser

  constructor(platform: IUserPlatform) {
    this.platform = platform
  }

  /**
   * Import user from directory
   */
  public async importFromDirectory(): Promise<IRawUser> {
    const platformStructure = usePlatformStructure(this.platform)

    this.directory = await openUserDirectory()

    // convert config.json file to raw user object
    this.rawUser = await parseUserProfileConfigFromFileDirectory(
      this.configFile
    )

    // assign avatar File to avatar raw config
    this.rawUser.profile.avatar = this.avatarFile

    // assign each media file to each string
    for (const collectionKey of Object.keys(platformStructure.user.media.collections) as IMediaCollection[]) {
      if (this.rawUser.media.hasOwnProperty(collectionKey)) {
        this.importRawMediaFilesByCollection(collectionKey)
      }
    }

    this.rawUser.origin = 'storage'
    this.rawUser.platform = parseUserPlatform(this.rawUser)

    return this.rawUser
  }

  /**
   * Get user config from directory files
   */
  get configFile(): Blob {
    return this.directory.find(
      (file: FileSystemFileEntry) => file.name === "config.json",
    )
  }

  /**
   * Generate raw user from directory files
   *
   * @param collection
   */
  private importRawMediaFilesByCollection(collection: IMediaCollection) {
    let i = 0
    let rawMediaForImport: IRawMedia = {}
    let rawMediaAlbumItem: IRawMedia = {}

    for (const media of this.rawUser.media[collection] as string|IRawMedia[]) {
      rawMediaForImport = {}

      if (typeof media === "string") {
        rawMediaForImport.type = UserMedia.detectMediaType(media)

        if (!media.startsWith("http")) {
          rawMediaForImport.file = this.getMediaFile(media)
        }
      } else if (media.type) {
        switch (media.type) {
          case "image":
            rawMediaForImport.type = media.type
            if (media.name && !media.name?.startsWith("http")) {
              rawMediaForImport.file = this.getMediaFile(media.name)
            }
            break
          case "video":
            rawMediaForImport.type = media.type
            if (media.name && !media.name?.startsWith("http")) {
              rawMediaForImport.file = this.getMediaFile(media.name)
            }
            if (
              media.cover &&
              typeof media.cover === "string" &&
              !media.cover?.startsWith("http")
            ) {
              rawMediaForImport.file = this.getMediaFile(media.cover)
            }
            break
          case "album":
            rawMediaForImport.type = media.type
            rawMediaForImport.list = []

            if (Array.isArray(media.list)) {
              for (const mediaAlbumItem of media.list as string|IRawMedia[]) {
                rawMediaAlbumItem = {}

                if (typeof mediaAlbumItem === "string") {
                  rawMediaAlbumItem.type = UserMedia.detectMediaType(mediaAlbumItem)
                  rawMediaAlbumItem.file = this.getMediaFile(mediaAlbumItem)
                } else if (mediaAlbumItem.name) {
                  rawMediaAlbumItem.type = mediaAlbumItem.type
                  rawMediaAlbumItem.file = this.getMediaFile(mediaAlbumItem.name)
                }

                // @ts-expect-error type error due to rawMedia strings support
                rawMediaForImport.list.push(rawMediaAlbumItem)
              }
            }
            break
          case "iframe":
            if (
              media.cover &&
              typeof media.cover === "string" &&
              !media.cover?.startsWith("http")
            ) {
              rawMediaForImport.cover = this.getMediaFile(media.cover)
            }
            break
        }
      }

      // @ts-ignore
      this.rawUser.media.posts[i] = rawMediaForImport

      i++
    }
  }

  /**
   * Get avatar file from imported user files
   */
  get avatarFile() {
    return this.directory.find(
      (file: FileSystemFileEntry) => file.name === this.rawUser.profile.avatar,
    )
  }

  /**
   * Get media file from imported user files
   */
  private getMediaFile(filename: string) {
    return this.directory.find(
      (file: FileSystemFileEntry) => file.name === filename,
    )
  }
}