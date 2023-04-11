export function parseProfile(data: IProfile): IProfile {
  const profileLoaded: IProfile = {} as IProfile

  // set parsed avatar
  profileLoaded.avatar = getProfileAvatar(data)

  // set fields
  profileLoaded.fields = data.fields

  // parse fields biography
  if (profileLoaded.fields.biography) {
    profileLoaded.fields.biography = profileLoaded.fields.biography.replace(/(?:\r\n|\r|\n)/g, "<br>")
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

    // parse media posts
    if (data.media.posts) {
      const profilePosts = parseProfilePosts(data)

      profileLoaded.media.posts = profilePosts.posts
    }

    // parse media reels
    if (data.media.reels) {
      const profileReels = parseProfileReels(data)

      profileLoaded.media.reels = profileReels.reels
    }
  }

  return profileLoaded
}

function parseProfilePosts(profile: IProfile) {
  const mediaPosts: IProfileMediaPosts = []

  let counter = 0

  // define variable for media albums
  let mediaAlbum: IProfileMediaPosts = []

  for (let i = 0; i < profile.media.posts.length; i++) {
    const mediaPost: string | IProfileMedia = profile.media.posts[i]

    switch (typeof mediaPost) {
      case "string":
        counter++
        mediaPosts.push({
          file: getProfileMedia(profile, mediaPost),
          type: "image"
        })
        break
      case "object":
        switch (mediaPost.type) {
          case "album":
            counter++

            // reset array
            mediaAlbum = []

            // parse albums
            if (Array.isArray(mediaPost.album)) {
              for (let m = 0; m < mediaPost.album.length; m++) {
                mediaAlbum.push({
                  file: getProfileMedia(profile, mediaPost.album[m]),
                  type: mediaPost.album[m].type
                })
              }
            }

            mediaPosts.push({
              album: mediaAlbum,
              type: "album"
            })
            break
          case "reel":
          case "story":
          case "video":
            counter++

            mediaPosts.push({
              file: getProfileMedia(profile, profile.media[i].name),
              type: "video"
            })
            break
        }

        break
    }
  }

  return {
    count: counter,
    posts: mediaPosts
  }
}

function parseProfileReels(profile: IProfile) {
  const mediaReels: IProfileMediaReels = []

  let counter = 0

  for (let i = 0; i < profile.media.posts.length; i++) {
    const mediaReel: string | IProfileMedia = profile.media.posts[i]

    switch (typeof mediaReel) {
      case "string":
        counter++
        mediaReels.push({
          file: getProfileMedia(profile, mediaReel),
          type: "image"
        })
        break
      case "object":
        switch (mediaReel.type) {
          case "story":
          case "reel":
          case "video":
            counter++

            mediaReels.push({
              file: getProfileMedia(profile, profile.media[i].name),
              type: "video"
            })
            break
        }

        break
    }
  }

  return {
    count: counter,
    reels: mediaReels
  }
}

export function getProfileAvatar(profile: IProfile): IProfileMediaFile {
  let avatarFilename = "avatar.jpg"

  if (profile.fields.avatar !== "") {
    avatarFilename = profile.fields.avatar
  }

  return {
    filename: avatarFilename,
    path: `profiles/${profile.fields.username}/${avatarFilename}`
  }
}

export function getProfileMedia(profile: IProfile, filename: string): IProfileMediaFile {
  return {
    filename,
    path: `profiles/${profile.fields.username}/media/${filename}`
  }
}
