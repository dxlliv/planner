import {openUserDirectory, readUserDirectoryConfig} from "../utils/utilsProfile";
import MediaManager from "../core/media/mediaManager.class";

export const useUserImportStore = defineStore("user/import", () => {
  const userStore = useUserStore()
  const userStorageStore = useUserStorageStore()

  const directory: Ref<any> = ref(null);
  const rawUserConfig: Ref<IRawUser> = ref({} as IRawUser)

  async function importFromDirectory() {
    directory.value = await openUserDirectory()

    // convert config.json file to raw user object
    // @ts-ignore
    rawUserConfig.value = await readUserDirectoryConfig(configFile.value)

    // assign avatar File to avatar raw config
    rawUserConfig.value.profile.avatar = getAvatarFile()

    // assign each media file to each string
    if (rawUserConfig.value.media.posts) importRawMediaFilesByCollection("posts")
    if (rawUserConfig.value.media.reels) importRawMediaFilesByCollection("reels")

    // initialize user
    userStore.loadUser(rawUserConfig.value, true)
    userStorageStore.addUserToStorageIndex(rawUserConfig.value.profile.username)
  }

  const configFile: ComputedRef<IRawUserProfile> = computed(() => {
    return directory.value.find(
        (file: FileSystemFileEntry) => file.name === 'config.json'
    )
  })

  function importRawMediaFilesByCollection(collection: IMediaCollection) {
    let i = 0
    let rawMediaForImport: IRawMedia = {}
    let rawMediaAlbumItem: IRawMedia = {}

    for (const media of rawUserConfig.value.media[collection]) {
      rawMediaForImport = {}

      if (typeof media === 'string') {
        rawMediaForImport.type = MediaManager.detectMediaType(media)

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
                  rawMediaAlbumItem.type = MediaManager.detectMediaType(mediaAlbumItem)
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
      rawUserConfig.value.media.posts[i] = rawMediaForImport

      i++
    }
  }

  function getAvatarFile() {
    return directory.value.find(
        (file: FileSystemFileEntry) => file.name === rawUserConfig.value.profile.avatar
    )
  }

  function getMediaFile(filename: string) {
    return directory.value.find(
        (file: FileSystemFileEntry) => file.name === filename
    )
  }

  return {
    importFromDirectory,
  };
});
