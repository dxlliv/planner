interface IConfig {
  profiles: {
    [username: string]: IProfile
  }
}

interface IProfile {
  fields: {
    biography: string
    followers_count: number
    follows_count: number
    name: string
    avatar: string
    username: string
    website: string
  }
  media: IProfileMedia
  reels: []
  stories: []
  highlights: []
}

type IProfileMedia = string[] | IProfileMediaImage[] | IProfileMediaList

interface IProfileMediaImage {
  path: string
}

interface IProfileMediaList {
  type: string
  list: string[] | IProfileMediaImage[]
  cover: string
}
