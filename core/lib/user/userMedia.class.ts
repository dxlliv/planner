import User from "../user/user.class"
import MediaImage from "../media/mediaImage.class"
import MediaVideo from "../media/mediaVideo.class"
import MediaAlbum from "../media/mediaAlbum.class"
import MediaIframe from "../media/mediaIframe.class"
import { fulfillMediaFilesForExport } from "../../utils/utilsUserExport"

export default class UserMedia implements IUserMedia {
  public readonly user: User

  public collections: { [collectionName: string]: IMedia[] } = {}

  private firstFetch = true

  constructor(user: User) {
    this.user = user
  }

  /**
   * Return available collections from current platform structure
   */
  public get structureCollectionKeys() {
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
  public hasCollection(collectionName: string) {
    return Object.prototype.hasOwnProperty.call(
      this.collections,
      collectionName,
    )
  }

  /**
   * Parse raw media configuration and load all the media
   */
  public fetch() {
    if (this.firstFetch === true) {
      this.firstFetch = false
    } else {
      return false
    }

    this.parseRawUserMediaCollections()

    return true
  }

  /**
   * Effectively run the media parsing
   * for each available collection
   *
   * @private
   */
  private parseRawUserMediaCollections() {
    for (const collection of this.structureCollectionKeys) {
      if (!this.hasCollection(collection)) {
        this.collections[collection] = []
      }

      if (
        Object.prototype.hasOwnProperty.call(
          this.user.raw.media,
          collection,
        )
      ) {
        for (let rawMedia of this.user.raw.media[collection]) {
          this.addMedia(rawMedia, collection)
        }
      }
    }
  }

  /**
   * Add a media to specific collection
   *
   * @param rawMedia
   * @param collection
   * @param addMethod
   */
  public addMedia(
    rawMedia: string | IRawMedia,
    collection: IMediaCollection = "posts",
    addMethod: "push" | "unshift" = "push",
  ) {
    const media = UserMedia.newMedia(this.user, rawMedia, collection)

    this.collections[collection][addMethod](media)

    // refresh posts count
    this.user.profile.setPostsCount(this.collections["posts"].length)
  }

  /**
   * Export media
   */
  public async export() {
    const exportedMedia = {}

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
   */
  public static newMedia(
    user: User,
    rawMedia: string | IRawMedia,
    collection: IMediaCollection = "posts",
  ): any {
    const mediaType = UserMedia.detectMediaType(rawMedia)

    switch (mediaType) {
      case "image":
        return new MediaImage(user, rawMedia, collection)

      case "video":
        return new MediaVideo(user, rawMedia, collection)

      case "album":
        if (typeof rawMedia === "string") {
          throw Error("Album media cannot be a string")
        }

        return new MediaAlbum(user, rawMedia, collection)

      case "iframe":
        if (typeof rawMedia === "string") {
          throw Error("Album media cannot be a string")
        }

        return new MediaIframe(user, rawMedia, collection)
    }
  }

  /**
   * Detect media type
   *
   * @param rawMedia
   */
  public static detectMediaType(rawMedia: string | IRawMedia) {
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

        // regular media import
        if (rawMedia.type) {
          return rawMedia.type
        }

        // fallback
        if (rawMedia.file && rawMedia.file) {
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
