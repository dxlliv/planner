interface IRawConfig {
  users: string[]
}

interface IRawUser {
  order: number
  profile: IRawUserProfile;
  media: IRawUserMedia;
  options: any;
}

interface IRawUserProfile {
  name: string;
  username: string;
  website?: string;
  biography?: string;
  avatar: string;
  verified?: boolean
  followers_count: number;
  follows_count: number;
}

interface IRawUserMedia {
  posts: string | IRawMedia[];
  reels: string | IRawMedia[];
  stories: string | IRawMedia[];
  highlights: string | IRawMedia[];
}

interface IRawMedia {
  type: IMediaType;
  name: string;
  blob?: any
}

interface IRawMediaImage extends IRawMedia {
  reel?: boolean
}

interface IRawMediaVideo extends IRawMedia {
  cover?: IRawMedia | number;
  reel?: boolean
}

interface IRawMediaAlbum extends IRawMedia {
  list: IRawMedia[]
}

interface IRawMediaIframe extends IRawMedia {
  href: string;
  cover?: IRawMedia;
  reel?: boolean
}

// parsed config

type IUsers = { [username: string]: IUser };

interface IUser {
  order: number
  options: IUserOptions;
  profile: IUserProfile;
  media: IUserMedia;
}

interface IUserProfile {
  name: string;
  username: string;
  website: null | {
    href: string;
    label: string;
  };
  verified?: boolean
  biography?: string;
  avatar: IMediaAvatar;
  followers_count: number;
  follows_count: number;
  posts_count: ComputedRef<number>;
  public_profile: string
}

type IUserProfileWebsite = null | {
  href: string;
  label: string;
}

interface IUserMedia {
  posts: MediaPost[];
  reels: MediaPost[];
  stories: MediaPost[];
  highlights: MediaPost[];
}

interface IUserOptions {}

interface Media {
  folder: string
  type: string
  data: IMediaData
  exportMedia: () => any
}

interface MediaPost extends Media {
}

interface MediaReel extends Media {
}

interface IMediaAvatar extends Media {
}

type IMediaType = 'image' | 'video' | 'album' | 'iframe'

interface IMediaFile {
  name: string;
  path: string;
  blob: Promise<File>
}

interface IMediaData {
  file?: IMediaFile
  cover?: MediaPost
  coverTime?: number
  list?: MediaPost[]
  reel?: boolean
  href?: string
  blob?: Promise<File>
}

interface IMediaExport {
  type: IMediaType
  file?: Promise<File>
  reel?: boolean
  href?: string
  cover?: Promise<File>
  list?: {
    file?: Promise<File>
  }[]
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