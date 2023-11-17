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
      posts: IConfigUserProfileMedia[];
      reels: IConfigUserProfileMedia[];
      stories: IConfigUserProfileMedia[];
      highlights: IConfigUserProfileMedia[];
    };
  };
  options: any;
}

type IConfigUserProfileMedia =
  | string
  | IConfigUserProfileMediaImage
  | IConfigUserProfileMediaVideo
  | IConfigUserProfileMediaIframe
  | IConfigUserProfileMediaAlbum;
type IConfigUserProfileMediaAlbumList = (
  | IConfigUserProfileMediaImage
  | IConfigUserProfileMediaVideo
  | IConfigUserProfileMediaIframe
)[];

type IConfigUserProfileMediaImage = {
  type: "image";
  name: string;
};

type IConfigUserProfileMediaVideo = {
  type: "video";
  name: string;
  cover?: number|string
};

type IConfigUserProfileMediaIframe = {
  type: "iframe";
  href: string;
};

type IConfigUserProfileMediaAlbum = {
  type: "album";
  list: IConfigUserProfileMediaAlbumList;
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
  avatar: IMediaFile;
  followers_count: number;
  follows_count: number;
  posts_count: number;
  media: {
    posts: IMediaPost[];
    reels: IMediaReel[];
    stories: IMediaVideo[];
    highlights: IMediaAlbum[];
  };
}

interface IUserOptions {}

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
};

type IMediaVideo = {
  type: "video";
  file: IMediaFile;
  reel?: boolean;
  cover?: string | number;
};

type IMediaIframe = {
  type: "iframe";
  href: string;
};

type IMediaAlbum = {
  type: "album";
  list: IMediaAlbumList;
};

interface IMediaFile {
  filename: string;
  path: string;
}
