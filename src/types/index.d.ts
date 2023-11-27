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
  avatar: string | File;
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

type IRawAvatar = File | string

interface IRawMedia {
  type: IMediaType;
  name: string;
  reel?: boolean
  cover?: number | string | IRawMedia;
  list?: string[] | IRawMedia[]
  href?: string
  file?: File
}

interface IRawMediaImage extends IRawMedia {
  reel?: undefined
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
  avatar: UserAvatar;
  followers_count: number;
  follows_count: number;
  posts_count: ComputedRef<number>;
  public_profile: string
}

interface UserAvatar {

}

type IUserProfileWebsite = null | {
  href: string;
  label: string;
}

interface IUserMedia {
  posts: IMedia[];
  reels: IMedia[];
  stories: IMedia[];
  highlights: IMedia[];
}

interface IUserOptions {}

interface IMedia {
  user: any
  raw: string | IRawMedia
  id: string
  type: string
  data: IMediaData
}

interface IMediaImage extends IMedia {}
interface IMediaVideo extends IMedia {}
interface IMediaAlbum extends IMedia {}
interface IMediaIframe extends IMedia {}

type IMediaType = 'image' | 'video' | 'album' | 'iframe'

interface IMediaFile {
  name: string;
  path: string;
  blob: Promise<File>
}

interface IMediaData {
  file?: IMediaFile
  cover?: IMedia
  coverTime?: number
  list?: IMedia[]
  reel?: boolean
  href?: string
  blob?: Promise<File>
}

interface IMediaExport {
  type: string
  file?: File
  reel?: boolean
  href?: string
  cover?: number | {
    type: string
    file: File
  }
  list?: {
    file?: File
  }[]
}