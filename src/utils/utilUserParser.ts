export function parseProfile(config: IConfigUser): IUser {
  const data: IUser = {
    profile: {}
  } as IUser

  // set fields
  data.profile.name = config.profile.name
  data.profile.username = config.profile.username
  data.profile.website = config.profile.website

  // parse fields biography
  if (data.profile.biography) {
    data.profile.biography = data.profile.biography.replace(/(?:\r\n|\r|\n)/g, "<br>")
  }

  // set parsed avatar
  data.profile.avatar = getProfileAvatar(config)

  // set empty media
  data.profile.media = {
    posts: [],
    stories: [],
    reels: [],
    highlights: []
  }

  // check for media property
  if (Object.prototype.hasOwnProperty.call(config, "media")) {

    // parse media posts
    if (config.profile.media.posts) {
      data.profile.media.posts = parseProfilePosts(config)
    }

    // parse media reels
    if (config.profile.media.reels) {
      // data.profile.media.reels = parseProfileReels(config)
    }
  }

  return data
}

function parseProfilePosts(config: IConfigUser) {
  const parsedPosts: any = []

  for (let mediaPost of config.profile.media.posts) {

    switch (typeof mediaPost) {

      case "string":
        parsedPosts.push({
          file: getProfileMediaImage(config, mediaPost),
          type: "image"
        })
        break

      case "object":
        switch (mediaPost.type) {
          case "image":
            parsedPosts.push({
              file: getProfileMediaImage(config, mediaPost.file),
              type: "video"
            })
            break;
          case "video":
            parsedPosts.push({
              file: getProfileMediaVideo(config, mediaPost.file),
              type: "video"
            })
            break;
          /*
          case "album":

            // reset array
            const mediaAlbum: IUserMediaAlbumList = []

            // parse albums
            if (Array.isArray(mediaPost.list)) {
              for (let albumMediaPost of mediaPost.list) {
                switch (albumMediaPost.type) {
                  case "image":
                    mediaAlbum.push({
                      file: getProfileMediaImage(config, albumMediaPost.file),
                      type: "video"
                    })
                    break;
                  case "video":
                    mediaAlbum.push({
                      file: getProfileMediaVideo(config, albumMediaPost.file),
                      type: "video"
                    })
                    break;

                }
              }
            }

            parsedPosts.push({
              list: mediaAlbum,
              type: 'album'
            })
            break
           */
        }

        break
    }
  }

  return parsedPosts
}

export function getProfileAvatar(config: IConfigUser): IUserMediaFile {
  let avatarFilename = "avatar.jpg"

  if (config.profile.avatar) {
    avatarFilename = config.profile.avatar
  }

  return {
    filename: avatarFilename,
    path: `profiles/${config.profile.username}/${avatarFilename}`
  }
}

export function getProfileMediaImage(config: IConfigUser, filename: string): IUserMediaFile {
  return {
    filename,
    path: `profiles/${config.profile.username}/media/${filename}`
  }
}

export function getProfileMediaVideo(config: IConfigUser, filename: string): IUserMediaFile {
  return {
    filename,
    path: `profiles/${config.profile.username}/media/${filename}`
  }
}
