export const useProfileStore = defineStore("profile", () => {
  const configStore = useConfigStore()

  const profile: Ref<IProfile> = ref({} as IProfile)
  function setProfile(data: IProfile): void {
    profile.value = data
  }

  async function loadProfile(username: string): Promise<boolean> {
    if (Object.prototype.hasOwnProperty.call(configStore.profiles, username)) {
      profile.value = configStore.profiles[username]

      return true
    }

    throw new Error("Profile not found")
  }
  function parseProfile(data: IProfile): IProfileLoaded {
    const profileLoaded: IProfileLoaded = {} as IProfileLoaded

    // set parsed avatar
    profileLoaded.avatar = getProfileAvatar(data)

    // set fields
    profileLoaded.fields = data.fields

    // parse fields biography
    if (profileLoaded.fields.biography) {
      profileLoaded.fields.biography = profileLoaded.fields.biography.replace(/(?:\r\n|\r|\n)/g, "<br>")
    }

    // set empty counters
    profileLoaded.counters = {
      posts: 0,
      stories: 0,
      reels: 0,
      highlights: 0
    }

    // set empty media
    profileLoaded.media = {
      posts: [],
      stories: [],
      reels: [],
      highlights: []
    }

    // check for media property
    if (!Object.prototype.hasOwnProperty.call(data, "media")) {
      profileLoaded.media = {}
    } else {
      const mediaPosts: IProfileMediaPosts = []

      // parse media posts
      if (data.media.posts) {
        // define variable for media albums
        let mediaAlbum: IProfileMediaPosts = []

        for (let i = 0; i < data.media.posts.length; i++) {
          const mediaPost: string | IProfileMedia = data.media.posts[i]

          switch (typeof mediaPost) {
            case "string":
              profileLoaded.counters.posts++
              mediaPosts.push({
                file: getProfileMedia(data, mediaPost),
                type: "image"
              })
              break
            case "object":
              switch (mediaPost.type) {
                case "album":
                  profileLoaded.counters.posts++

                  // reset array
                  mediaAlbum = []

                  // parse albums
                  if (Array.isArray(mediaPost.album)) {
                    for (let m = 0; m < mediaPost.album.length; m++) {
                      mediaAlbum.push({
                        file: getProfileMedia(data, mediaPost.album[m]),
                        type: mediaPost.album[m].type
                      })
                    }
                  }

                  mediaPosts.push({
                    album: mediaAlbum,
                    type: "album"
                  })
                  break
                case "video":
                  profileLoaded.counters.posts++

                  mediaPosts.push({
                    file: getProfileMedia(data, data.media[i].name),
                    type: "video"
                  })
                  break
              }

              break
          }
        }

        profileLoaded.media.posts = mediaPosts
      }
    }

    return profileLoaded
  }

  return {
    profile,
    setProfile,
    loadProfile,
    parseProfile
  }
})
