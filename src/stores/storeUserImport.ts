import {openUserDirectory, parseUserProfileConfigFromFileDirectory} from "../utils/utilsUserProfile";
import UserMedia from "../core/user/userMedia.class";

export const useUserImportStore = defineStore("user/import", () => {
  const userStore = useUserStore()
  const userStorageStore = useUserStorageStore()

  const directory: Ref<any> = ref(null);
  const rawUser: Ref<IRawUser> = ref({} as IRawUser)

  /**
   * Import user from directory
   *
   * @param platform
   */
  async function importFromDirectory(platform: string) {
    directory.value = await openUserDirectory()

    // convert config.json file to raw user object
    // @ts-ignore
    rawUser.value = await parseUserProfileConfigFromFileDirectory(configFile.value)

    // assign avatar File to avatar raw config
    rawUser.value.profile.avatar = getAvatarFile()

    // assign each media file to each string
    if (rawUser.value.media.posts) importRawMediaFilesByCollection("posts")
    if (rawUser.value.media.reels) importRawMediaFilesByCollection("reels")

    // initialize user
    userStore.loadUser(rawUser.value, platform, 'storage')

    userStorageStore.addUserToStorageIndex(rawUser.value.profile.username)
  }

  /**
   * Get user config from directory files
   */
  const configFile: ComputedRef<IRawUserProfile> = computed(() => {
    return directory.value.find(
        (file: FileSystemFileEntry) => file.name === 'config.json'
    )
  })

  /**
   * Generate raw user from directory files
   *
   * @param collection
   */
  function importRawMediaFilesByCollection(collection: IMediaCollection) {
    let i = 0
    let rawMediaForImport: IRawMedia = {}
    let rawMediaAlbumItem: IRawMedia = {}

    for (const media of rawUser.value.media[collection]) {
      rawMediaForImport = {}

      if (typeof media === 'string') {
        rawMediaForImport.type = UserMedia.detectMediaType(media)

        if (!media.startsWith('http')) {
          rawMediaForImport.file = getMediaFile(media)
        }
      } else if (media.type) {
        switch(media.type) {
          case 'image':
            rawMediaForImport.type = media.type
            if (media.name && !media.name?.startsWith('http')) {
              rawMediaForImport.file = getMediaFile(media.name)
            }
            break
          case 'video':
            rawMediaForImport.type = media.type
            if (media.name && !media.name?.startsWith('http')) {
              rawMediaForImport.file = getMediaFile(media.name)
            }
            if (media.cover && typeof media.cover === 'string' && !media.cover?.startsWith('http')) {
              rawMediaForImport.file = getMediaFile(media.cover)
            }
            break
          case 'album':
            rawMediaForImport.type = media.type
            rawMediaForImport.list = []

            if (Array.isArray(media.list)) {
              for (const mediaAlbumItem of media.list) {
                rawMediaAlbumItem = {}

                if (typeof mediaAlbumItem === 'string') {
                  rawMediaAlbumItem.type = UserMedia.detectMediaType(mediaAlbumItem)
                  rawMediaAlbumItem.file = getMediaFile(mediaAlbumItem)
                } else if (mediaAlbumItem.name) {
                  rawMediaAlbumItem.type = mediaAlbumItem.type
                  rawMediaAlbumItem.file = getMediaFile(mediaAlbumItem.name)
                }
              }

              rawMediaForImport.list.push(rawMediaAlbumItem)
            }
            break
          case 'iframe':
            if (media.cover && typeof media.cover === 'string' && !media.cover?.startsWith('http')) {
              rawMediaForImport.cover = getMediaFile(media.cover)
            }
            break
        }
      }

      // @ts-ignore
      rawUser.value.media.posts[i] = rawMediaForImport

      i++
    }
  }

  /**
   * Get avatar file from imported user files
   */
  function getAvatarFile() {
    return directory.value.find(
        (file: FileSystemFileEntry) => file.name === rawUser.value.profile.avatar
    )
  }

  /**
   * Get media file from imported user files
   */
  function getMediaFile(filename: string) {
    return directory.value.find(
        (file: FileSystemFileEntry) => file.name === filename
    )
  }

  return {
    importFromDirectory,
  };
});
