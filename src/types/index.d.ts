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
    avatar?: string;
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

type IRawMedia =
  | string
  | IRawMediaImage
  | IRawMediaVideo
  | IRawMediaIframe
  | IRawMediaAlbum;

type IRawMediaAlbumItem = (
    | IRawMediaImage
    | IRawMediaVideo
    | IRawMediaIframe
)

type IRawMediaAlbumList = IRawMediaAlbumItem[];

type IRawMediaImage = {
  type: "image";
  name: string;
  cover: undefined;
};

type IRawMediaVideo = {
  type: "video";
  name: string;
  cover?: number|string
};

type IRawMediaIframe = {
  type: "iframe";
  href: string;
  cover: undefined;
};

type IRawMediaAlbum = {
  type: "album";
  list: IRawMediaAlbumList;
  cover: undefined;
};

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
  avatar: IMedia;
  followers_count: number;
  follows_count: number;
  posts_count: number;
  media: IProfileMedia;
  publicProfile: string
}

interface IProfileMedia {
  posts: IMedia[];
  reels: IMediaReel[];
  stories: IMediaVideo[];
  highlights: IMediaAlbum[];
}

interface IUserOptions {}

interface IMedia {
  file: IMediaFile
  type: string
}

type IMediaPost =
  | IMediaImage
  | IMediaVideo
  | IMediaIframe
  | IMediaAlbum;

type IMediaReel = IMediaVideo

type IMediaAlbumList = (
  | IMediaImage
  | IMediaVideo
  | IMediaIframe
)[];

type IMediaImage = {
  type: "image";
  file: IMediaFile;
  cover: null
  list: null
};

type IMediaVideo = {
  type: "video";
  file: IMediaFile;
  cover: IMediaFile | number;
  list: null
  reel?: boolean;
};

type IMediaIframe = {
  type: "iframe";
  cover: null
  file: null
  list: null
  href: string;
};

type IMediaAlbum = {
  type: "album";
  file: null
  cover: null
  list: IMediaAlbumList;
};

type IMediaFile = {
  name: string;
  path: string;
} | null
