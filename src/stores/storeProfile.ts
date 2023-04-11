import { useConfigStore } from "./storeConfig"

export const useProfileStore = defineStore("profile", () => {
  const configStore = useConfigStore()
  const profile: Ref<IProfile> = ref({} as IProfile)
  function setProfile(data: IProfile) {
    profile.value = data
  }

  async function loadProfile(username: string): Promise<boolean> {
    if (Object.prototype.hasOwnProperty.call(configStore.profiles, username)) {
      profile.value = configStore.profiles[username]

      return true
    }

    throw new Error("Profile not found")
  }
  function parseProfile(data: IProfile) {
    data.fields.avatar = getProfileAvatar(data)

    if (data.fields.description) {
      data.fields.description = data.fields.description.replace(/(?:\r\n|\r|\n)/g, "<br>")
    }

    data.stats = {
      media: 0,
      stories: 0,
      highlights: 0
    }

    // parse profile ProfileMedia
    if (data.media) {
      for (let i = 0; i < data.media.length; i++) {
        switch (typeof data.media[i]) {
          case "string":
            data.stats.media++
            data.media[i] = {
              type: "image",
              path: getMediaPath(data, data.media[i])
            }
            break
          case "object":
            switch (data.media[i].type) {
              case "album":
                data.stats.media++

                if (Array.isArray(data.media[i].list)) {
                  for (let m = 0; m < data.media[i].list.length; m++) {
                    data.media[i].list[m] = {
                      path: getMediaPath(data, data.media[i].list[m])
                    }
                  }
                }
                break
              case "video":
                data.stats.media++

                if (data.media[i].name) {
                  data.media[i].path = getMediaPath(data, data.media[i].name)
                }
                break
              case "stories":
                data.stats.stories++

                if (data.media[i].name) {
                  data.media[i].path = getMediaPath(data, data.media[i].name)
                }
                break
            }

            break
        }
      }
    } else {
      data.media = []
    }
    return data
  }

  function getProfileAvatar(profile: IProfile) {
    if (!profile.fields.avatar) {
      return `profiles/${profile.fields.username}/avatar.jpg`
    } else {
      return `profiles/${profile.fields.username}/${profile.fields.avatar}`
    }
  }

  function getMediaPath(profile: IProfile, filename: string) {
    return `profiles/${profile.fields.username}/media/${filename}`
  }

  return {
    profile,
    setProfile,
    loadProfile,
    parseProfile,
    getProfileAvatar,
    getMediaPath
  }
})
