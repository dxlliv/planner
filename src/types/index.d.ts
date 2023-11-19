interface IConfig {
  profiles: IConfigUsers;
}

type IConfigUsers = IConfigUser[];

interface IConfigUser {
  profile: {
    name: string;
    username: string;
    website?: string;
    biography?: string;
    avatar: string;
    verified?: boolean
    followers_count: number;
    follows_count: number;
    media: {
      posts: IRawMedia[];
      reels: IRawMedia[];
      stories: IRawMedia[];
      highlights: IRawMedia[];
    };
  };
  options: any;
}

type IRawMedia = string | {
  name: string;
  type: IMediaType;
  cover: IRawMedia;
  list: IRawMedia[]
  href: string;
  reel: boolean
}

// parsed config

type IUsers = { [username: string]: IUser };

interface IUser {
  profile: IProfile;
  options: IUserOptions;
}

interface IProfile {
  name: string;
  username: string;
  website: null | {
    href: string;
    label: string;
  };
  verified?: boolean
  biography?: string;
  avatar: Media;
  followers_count: number;
  follows_count: number;
  posts_count: number;
  media: IProfileMedia;
  publicProfile: string
}

interface IProfileMedia {
  posts: MediaPost[];
  reels: MediaPost[];
  stories: MediaPost[];
  highlights: MediaPost[];
}

interface IUserOptions {}

interface Media {
  folder: string

  raw: IRawMedia
  type: string

  data: IMediaData

  setMediaFolder: (folderName: string) => void
  getMediaImage: (fileName: string) => IMediaData
  getMediaVideo: (fileName: string, cover: MediaPost | number, reel?: boolean) => IMediaData
  getMediaAlbum: (list: any) => IMediaData
  getMediaIframe: (href: string, cover: MediaPost, reel?: boolean) => IMediaData
  getMediaFile: (fileName: string) => IMediaFile
}

interface MediaPost extends Media {
}

interface MediaReel extends Media {
}

interface IMediaData {
  href?: string
  file?: IMediaFile
  cover?: MediaPost
  coverTime?: number
  list?: MediaPost[]
  reel?: boolean
}

type IMediaType = 'image' | 'video' | 'album' | 'iframe'

interface IMediaFile {
  name: string;
  path: string;
}

/*

interface IMediaImage {
  type: 'image'
  data: {
    file: IMediaFile
    path: string
  }
}

interface IMediaVideo {
  type: 'video'
  data: {
    file: IMediaFile
    path: string
    cover: IMediaImage | number
  }
}

interface IMediaAlbum {
  type: 'album'
  data: {
    list: (IMediaImage|IMediaVideo|IMediaIframe)[]
  }
}

interface IMediaIframe {
  type: string
  data: {
    file: IMediaFile
    path: string
    cover: IMediaImage
  }
}
 */