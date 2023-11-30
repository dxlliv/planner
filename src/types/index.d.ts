interface IRawConfig {
  users: string[]
}

interface IRawUser {
  origin: string
  username: string;
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
  type?: IMediaType;
  collection?: IMediaCollection
  name?: string;
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
  origin: string
  options: IUserOptions;
  username: string;
  profile: IUserProfile;
  media: IUserMedia;

  get hasLocalChanges(): boolean
  get isRemovable(): boolean
  remove(): Promise<boolean>
}

interface IUserProfile {
  name: string;
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

  setName(name: string): void

  setBiography(biography: string): void
  updateBiography(biography: string): Promise<void>

  setVerified(verified: boolean): void
  setPostsCount(count: number): void
  setFollowersCount(count: number): void
  setFollowsCount(count: number): void
  setWebsite(website: any): void
  setAvatar(avatar: UserAvatar): void
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
  type: IMediaType
  collection: IMediaCollection

  setUniqueId(): void
  setMediaType(mediaType: IMediaType): void
  parseMediaFileName(fileName: string): IMediaFile
  parseMediaFileBlob(fileBlob: File): IMediaFile

  refresh(): void
  save(): void

  remove(): Promise<number>
  export(): Promise<IMediaExport | IMediaExport[] | undefined>
}

interface IMediaImage extends IMedia {
  file: IMediaFile

  setMediaImage(blob: File): Promise<void>

  convertToAlbum(): Promise<void>
  convertToIframe(href: string): Promise<void>
}

interface IMediaVideo extends IMedia {
  file: IMediaFile
  reel: boolean
  cover: undefined | IMediaImage
  coverTime: number

  setCover(file: File): Promise<void>
  setCoverTime(value: number): Promise<void>
  removeCover(): Promise<void>

  convertToAlbum(): Promise<void>
}

interface IMediaAlbum extends IMedia {
  list: (IMediaImage | IMediaVideo)[]
  listIndex: number

  get currentIndex(): number
  get itemsCount(): number

  addToAlbum(file: File): Promise<void>
  removeFromAlbum(): Promise<void>

  setListIndex(index: number): void
  slideToPrevListItem(): void
  slideToNextListItem(): void
}

interface IMediaIframe extends IMedia {
  reel: boolean
  href: string
  cover: undefined | IMediaImage
}

type IMediaType = 'image' | 'video' | 'album' | 'iframe'
type IMediaCollection = 'posts' | 'reels'

interface IMediaFile {
  name: string;
  path: string;
  blob: Promise<File>
}

interface IMediaData {
  file?: IMediaFile
  cover?: IMedia
  coverTime?: number
}

interface IMediaCoverExport {
  type: string
  file: File
}

interface IMediaExport {
  type: string
  /*
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
   */
}

interface IMediaImageExport extends IMediaExport {
  file: File
}

interface IMediaVideoExport extends IMediaExport {
  file: File
  reel: boolean
  cover: undefined | number | IMediaCoverExport
}

interface IMediaAlbumExport extends IMediaExport {
  list?: {
    file?: File
  }[]
}

interface IMediaIframeExport extends IMediaExport {
  reel: boolean
  href: string
  cover: undefined | number | IMediaCoverExport
}