interface IRawConfig {
  users: string[]
}

interface IRawUser {
  order: number
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
      posts: string | IRawMedia[];
      reels: string | IRawMedia[];
      stories: string | IRawMedia[];
      highlights: string | IRawMedia[];
    };
  };
  options: any;
}

interface IRawMedia {
  type: IMediaType;
  name: string;
  reel?: boolean
}

interface IRawMediaImage extends IRawMedia {
  type: "image"
  reel?: boolean
}

interface IRawMediaVideo extends IRawMedia {
  type: "video"
  cover?: IRawMedia | number;
}

interface IRawMediaAlbum extends IRawMedia {
  type: "album"
  list: IRawMedia[]
}

interface IRawMediaIframe extends IRawMedia {
  href: string;
  cover?: IRawMedia;
}

// parsed config

type IUsers = { [username: string]: IUser };

interface IUser {
  order: number
  options: IUserOptions;
  profile: IUserProfile;
}

interface IUserProfile extends IProfile {}

interface IProfile {
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
  type: string
  data: IMediaData
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
}

interface IMediaData {
  file?: IMediaFile
  cover?: MediaPost
  coverTime?: number
  list?: MediaPost[]
  reel?: boolean
  href?: string
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