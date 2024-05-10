// @ts-expect-error
declare function useNuxtApp(): NuxtApp;

type IUserPlatform = "instagram"
type IUserOrigin = "local" | "remote" | "storage"

interface IRawConfig {
  project: {
    links: any
  },
  users: string[]
  platform: {
    default: IUserPlatform
  }
  features: {
    editor: boolean
  }
  locale: string
}

interface IRawUser {
  id?: string
  path: string
  profile: IRawUserProfile
  media: IRawUserMedia
  platform: IUserPlatform
  options: any

  origin: IUserOrigin
  basePath: string
}

interface IRawUserProfile {
  name: string
  username: string
  website?: URL | IRawUserProfileWebsite
  biography?: string
  avatar: string | File
  verified?: boolean
  followers_count: number
  follows_count: number
}

interface IRawUserProfileWebsite {
  label: string
  href: string
}

interface IRawUserMedia {
  posts: string | IRawMedia[]
  reels: string | IRawMedia[]
  stories: string | IRawMedia[]
  highlights: string | IRawMedia[]
}

type IRawAvatar = File | string

interface IRawMedia {
  type?: IMediaType
  collection?: IMediaCollection
  name?: string
  file?: File
  reel?: boolean
  cover?: number | string | IRawMedia | File
  list?: string[] | IRawMedia[] | File[]
  link?: string
  href?: string

  title?: string
  slug?: string
  caption?: string
  date?: string
}

interface IRawMediaImage extends IRawMedia {
}

interface IRawMediaVideo extends IRawMedia {
  cover?: IRawMedia | number
}

interface IRawMediaAlbum extends IRawMedia {
  list: IRawMedia[]
}

interface IRawMediaIframe extends IRawMedia {
  href: string
  cover?: IRawMedia
}

interface ITempUserReference {
  username: string
  platform: IUserPlatform
}

// parsed config

type IUsers = { [username: string]: IUser }

interface IUser {
  platform: IUserPlatform
  origin: IUserOrigin
  id: string

  raw: IRawUser

  options: IUserOptions
  profile: IUserProfile
  media: IUserMedia
  storage: any

  status: IUserStatus

  // @ts-ignore
  get route(): RouteRecord
  get hasLocalChanges(): boolean
  get hasUnsavedChanges(): boolean
  get isRemovable(): boolean

  init(): void
  loadUserStorage(): void
  loadUserProfile(): Promise<void>
  loadUserMedia(): void
  setUnsavedChanges(value: boolean): void
  setLocalChanges(value: boolean): void
  setId(id: string): void

  save(): Promise<void>
  remove(): Promise<void>
  reset(): Promise<void>
  export(): Promise<any>
}

interface IInstagramUser extends IUser {
  platform: IUserPlatform
  id: string

  profile: IInstagramUserProfile
  media: IInstagramUserMedia

  loadUserClient()
  unloadUserClient()
}

interface IUserStatus {
  unsavedChanges: boolean
  localChanges: boolean
}

interface IUserExported {
  id: string
  profile: any
  media: IUserExportedMedia
}

interface IUserExportedMedia {
  [collection: string]: any
}

interface IUserProfile {
  username: string
  name: string
  website: IUserProfileWebsite
  verified?: boolean
  biography?: string
  avatar: any | undefined
  followers_count: number
  follows_count: number
  posts_count: number

  setUsername(username: string): void
  updateUsername(username: string): Promise<void>

  setName(name: string): void
  updateName(name: string): Promise<void>

  setBiography(biography: string): void
  updateBiography(biography: string): Promise<void>

  setVerified(verified: boolean): void
  setPostsCount(count: number): void
  setFollowersCount(count: number): void
  setFollowsCount(count: number): void
  setWebsite(website: IRawUserProfileWebsite): void

  setAvatar(avatar: string | File): Promise<void>
  updateAvatar(avatar: File): Promise<void>

  importRawUserProfileConfig(): void
  update(data: any, silentUpdate?: boolean): Promise<void>
  export(): Promise<IRawUserProfile>
}

interface IInstagramUserProfile extends IUserProfile {
  user: IInstagramUser
  structure: IPlatformStructureUserProfile

  export(): Promise<IRawUserProfile>
}

interface UserAvatar {
  get isSet(): boolean
  export(): Promise<File>

  get rawFilePath(): boolean
}

type IUserProfileWebsite = null | {
  label: string
  href: string
}

type IUserMediaCollections = {
  [collectionName: string]: IMedia[]
}

interface IUserMedia {
  structure: IPlatformStructureUserMedia

  collections: IUserMediaCollections

  get structureCollectionKeys(): string[]
  get collectionKeys(): string[]

  get activeCollection(): IMediaCollection
  setActiveCollection(collectionName: IMediaCollection): void
  hasCollection(collectionName: string): boolean

  importRawUserMediaConfig(from: IMediaFrom): void

  reset(): void
  fetchSingleMedia(collection: IMediaCollection, media: string): void
  addMedia(
    rawMedia: string | IRawMedia,
    collection: IMediaCollection,
    options: {
      addMethod: IMediaAddMethod,
      from: IMediaFrom
    }
  ): void
  export(): Promise<any>
}

interface IInstagramUserMedia extends IUserMedia {
}

interface IUserOptions {}

interface IMedia {
  user: any
  raw: string | File | IRawMedia
  id: string
  route: string
  title: string
  slug: string
  type: IMediaType
  from: IMediaFrom
  collection: IMediaCollection
  cover?: IMediaImage
  list?: any

  collectionSingularized: string

  setUniqueId(): void

  get isEditing(): boolean
  setEditing(toggle: boolean): void

  setDetailView(toggle: boolean): void
  setMediaType(mediaType: IMediaType): void
  fetchMediaFileFromString(fileName: string): Promise<IMediaFile>
  fetchMediaFileFromBlob(fileBlob: File): Promise<IMediaFile>

  reel?: boolean
  //isReel(): boolean

  caption: string
  setCaption(value: string) :void

  date: string
  setDate(value: string) :void

  link: string
  get externalLink(): string

  refresh(): void

  remove(): Promise<number>

  fetch(): void

  export(): Promise<any>
  exportConfig(): any
  exportFiles(): Promise<any>
}

interface IMediaImage extends IMedia {
  file: Promise<File>

  setMediaImage(blob: File): Promise<void>

  convertToAlbum(): Promise<void>
  convertToIframe(href: string): Promise<void>
}

interface IMediaVideo extends IMedia {
  file: Promise<File>
  cover: undefined | IMediaImage | File
  coverTime: number

  setCover(file: File): Promise<void>
  setCoverTime(value: number): Promise<void>
  removeCover(): Promise<void>

  convertToAlbum(): Promise<void>
  cloneToReel(): Promise<void>
}

interface IMediaAlbum extends IMedia {
  list: (IMediaImage | IMediaVideo)[]
  listIndex: number

  get currentIndex(): number
  get itemsCount(): number

  addToAlbum(file: File): Promise<void>
  setMediaAlbumImage(file: File): Promise<void>
  removeFromAlbum(): Promise<void>

  setListIndex(index: number): void
  slideToPrevListItem(): void
  slideToNextListItem(): void
}

interface IMediaIframe extends IMedia {
  href: string
  cover: undefined | IMediaImage | File

  cloneToReel(): Promise<void>
}

type IMediaType = "image" | "video" | "album" | "iframe"
type IMediaFrom = "config" | "client"
type IMediaCollection = "posts" | "reels"
type IMediaAddMethod = "push" | "unshift"

interface IMediaFile {
  name?: string
  path?: string
  blob?: Promise<File>
}

interface IMediaCoverExport {
  type: string
  file: File
}

interface IMediaExportCommonConfig {
  type: string
  caption: string
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

interface IMediaImageExportConfig extends IMediaExportCommonConfig {

}

interface IMediaImageExportMedia {
  file: File
}

interface IMediaVideoExportConfig extends IMediaExportCommonConfig {
  reel: boolean
}

interface IMediaVideoExportMedia {
  file: File
  cover: undefined | number | IMediaCoverExport
}

interface IMediaAlbumExportConfig extends IMediaExportCommonConfig {

}

interface IMediaAlbumExportMedia extends IMediaExportCommonConfig {
  list?: {
    file?: File
  }[]
}

interface IMediaIframeExportConfig extends IMediaExportCommonConfig {
  reel: boolean
  href: string
}

interface IMediaIframeExportMedia {
  cover: IMediaCoverExport
}

interface IUserStorage {
  init(): Promise<void>
  isContentAvailable(): Promise<boolean>
  restore(): Promise<void>
  save(): Promise<void>
  remove(): Promise<void>
}

interface IPlatform {
  user: IPlatformStructureUser
}

interface IPlatformStructureUser {
  profile: IPlatformStructureUserProfile
  collections: {
    [fieldKey: string]: IPlatformStructureCollectionOptions
  }
}

interface IPlatformStructureUserProfile {
  fields: {
    [fieldKey: string]: {
      type: string
      validation?: {
        required?: boolean
        minLength?: number
        maxLength?: number
      }
      methods?: {
        set: string
      }
    }
  }
}

interface IPlatformStructureUserMedia {
  collections: {
    [collectionName: string]: any
  }
}

interface IPlatformStructureCollectionOptions {}

interface IDatabase extends DBSchema {}