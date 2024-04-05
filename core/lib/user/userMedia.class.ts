import User from "../user/user.class"
import MediaImage from "../media/mediaImage.class"
import MediaVideo from "../media/mediaVideo.class"
import MediaAlbum from "../media/mediaAlbum.class"
import MediaIframe from "../media/mediaIframe.class"
import { fulfillMediaFilesForExport } from "../../utils/utilsUserExport"

export default class UserMedia implements IUserMedia {
  public readonly user: User

  public collections: IUserMediaCollections = {}
  private collection: IMediaCollection = 'posts' as IMediaCollection

  constructor(user: User) {
    this.user = user
  }

  /**
   * Return available collections from current platform structure
   */
  public get structureCollectionKeys(): IMediaCollection[] {
    // @ts-expect-error
    return Object.keys(this.user.media.structure.collections)
  }

  /**
   * Get user active media collections
   */
  public get collectionKeys() {
    return Object.keys(this.collections)
  }

  /**
   * Check if this user has an active collection
   *
   * @param collectionName
   */
  public hasCollection(collectionName: string): boolean {
    return Object.prototype.hasOwnProperty.call(
      this.collections,
      collectionName,
    )
  }

  public setActiveCollection(collection: IMediaCollection) {
    this.collection = collection
  }

  /**
   * Get active collection
   */
  public get activeCollection() {
    return this.collection
  }

  /**
   * Parse raw media configuration and fetch all the media
   */
  public fetch(from: IMediaFrom = 'config') {
    this.reset()

    this.parseRawUserMediaCollections(from)

    return true
  }

  /**
   * Fetch single media from raw media configuration
   *
   * @param collection
   * @param mediaSlug
   */
  public fetchSingleMedia(collection: IMediaCollection, mediaSlug: string) {
    // @ts-expect-error
    const rawMedia = this.user.raw.media[collection].find(rawMedia => rawMedia.slug === mediaSlug)

    if (!rawMedia) {
      return null
    }

    return UserMedia.newMedia(this.user, rawMedia, collection, 'config')
  }

  /**
   * Effectively run the media parsing
   * for each available collection
   *
   * @private
   */
  private parseRawUserMediaCollections(from: IMediaFrom = 'config') {
    for (const collection of this.structureCollectionKeys) {
      if (
        Object.prototype.hasOwnProperty.call(
          this.user.raw.media,
          collection,
        )
      ) {
        for (let rawMedia of this.user.raw.media[collection]) {
          this.addMedia(rawMedia, collection, {
            addMethod: 'push',
            from
          })
        }
      }
    }
  }

  public reset() {
    for (const collection of this.structureCollectionKeys) {
      this.collections[collection] = []
    }
  }

  /**
   * Add a media to specific collection
   *
   * @param rawMedia
   * @param collection
   * @param options
   */
  public addMedia(
    rawMedia: string | IRawMedia,
    collection: IMediaCollection = "posts",
    options: {
      addMethod: IMediaAddMethod,
      from: IMediaFrom
    } = {
      addMethod: 'push',
      from: 'config'
    }
  ) {
    const media = UserMedia.newMedia(this.user, rawMedia, collection, options.from)

    this.collections[collection][options.addMethod](media)

    // refresh posts count
    this.user.profile.setPostsCount(this.collections["posts"].length)
  }

  /**
   * Export media
   */
  public async export(): Promise<IUserExportedMedia> {
    const exportedMedia: IUserExportedMedia = {}

    for await (const collectionKey of this.collectionKeys) {
      exportedMedia[collectionKey] = await fulfillMediaFilesForExport(
        this.collections[collectionKey],
      )
    }

    return exportedMedia
  }

  /**
   * Static method that create media instance based on its type
   *
   * @param user
   * @param rawMedia
   * @param collection
   * @param from
   */
  public static newMedia(
    user: User,
    rawMedia: string | IRawMedia | File,
    collection: IMediaCollection = "posts",
    from: IMediaFrom = "client"
  ): any {
    const mediaType = UserMedia.detectMediaType(rawMedia)

    switch (mediaType) {
      case "image":
        return new MediaImage(user, rawMedia, collection, from)

      case "video":
        return new MediaVideo(user, rawMedia, collection, from)

      case "album":
        if (typeof rawMedia === "string") {
          throw Error("Album media cannot be a string")
        }

        // @ts-expect-error todo fix types
        return new MediaAlbum(user, rawMedia, collection, from)

      case "iframe":
        if (typeof rawMedia === "string") {
          throw Error("Album media cannot be a string")
        }

        return new MediaIframe(user, rawMedia, collection, from)
    }
  }

  /**
   * Detect media type
   *
   * @param rawMedia
   */
  public static detectMediaType(rawMedia: string | IRawMedia | File) {
    let filename = ""

    switch (typeof rawMedia) {
      case "string":
        // shortened media import
        filename = rawMedia
        break

      case "object":
        // shortened album import
        if (Array.isArray(rawMedia)) {
          return "album"
        }

        if (rawMedia.type && rawMedia.type.includes('/')) {
          return rawMedia.type.split('/')[0]
        }

        // regular media import
        if (rawMedia.type) {
          return rawMedia.type
        }

        // fallback
        if (!(rawMedia instanceof File) && rawMedia.file && rawMedia.file) {
          filename = rawMedia.file.name
        } else {
          if (typeof rawMedia.name === "string") {
            filename = rawMedia.name
          }
        }
    }

    switch (getFileExtension(filename)) {
      case "mp4":
        return "video"
      default:
        return "image"
    }
  }
}
