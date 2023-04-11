interface IConfig {
  profiles: IConfigProfiles
}

type IConfigProfiles = { [username: string]: IProfile }

interface IProfile {
  avatar?: IProfileMediaFile
  fields: {
    biography: string
    followers_count: number
    follows_count: number
    name: string
    avatar: string
    username: string
    website: string
  }
  media: {
    posts: string[] | IProfileMediaPosts
    reels: string[] | IProfileMediaReels
    stories: string[] | IProfileMediaStories
    highlights: string[] | IProfileMediaHighlights
  }
}

interface IProfileMedia {
  file?: IProfileMediaFile
  album?: string[] | IProfileMedia[]
  type: "image" | "video" | "album"
  cover?: string
  date?: string
}

interface IProfileMediaFile {
  filename: string
  path: string
}

type IProfileMediaPosts = IProfileMedia[]
type IProfileMediaReels = IProfileMediaReel[]
type IProfileMediaStories = IProfileMediaStory[]
type IProfileMediaHighlights = IProfileMediaHighlight[]

interface IProfileMediaReel extends IProfileMedia {}
interface IProfileMediaStory extends IProfileMedia {}
interface IProfileMediaHighlight extends IProfileMediaStory {}
