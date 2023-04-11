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
  media: string[] | IProfileMediaImage[] | IProfileMediaList
  reels: []
  stories: []
  highlights: []
}

interface IProfileMediaList {
  type: string
  list: string[] | IProfileMediaImage[]
  cover: string
}

interface IProfileMediaImage {
  path: string
}
