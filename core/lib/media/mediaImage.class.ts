import Media from "./media.class"
import User from "../user/user.class"
import UserMedia from "../user/userMedia.class"

export default class MediaImage extends Media implements IMediaImage {
  public file: Promise<IMediaFile>

  constructor(
    user: User,
    raw: string | File | IRawMedia,
    collection?: IMediaCollection,
    from?: IMediaFrom,
  ) {
    super(user, raw, collection, from)

    this.setMediaType("image")

    if (from === 'client') {
      this.fetch()
    }
  }

  public fetch() {
    this.fetchMediaImage()
  }

  private fetchMediaImage() {
    switch (typeof this.raw) {
      case "string":
        // shortened image import
        this.file = this.fetchMediaFileFromString(this.raw)
        break

      case "object":
        // direct upload
        if (this.raw instanceof File) {
          // regular image import from: new image / indexeddb restore
          this.file = this.fetchMediaFileFromBlob(this.raw)
        } else if (this.raw.file && this.raw.file instanceof File) {
          // image restored from indexeddb restore
          this.file = this.fetchMediaFileFromBlob(this.raw.file)
        } else if (typeof this.raw.name === "string") {
          // regular image import from: config.json
          this.file = this.fetchMediaFileFromString(this.raw.name)
        }

        break
    }
  }

  public async convertToAlbum() {
    const mediaAlbum = UserMedia.newMedia(
      this.user,
      {
        type: "album",
        list: [
          await this.file,
        ],
      },
      "posts",
    )

    const index = await this.remove()

    this.user.media.collections[this.collection].splice(index, 0, mediaAlbum)

    this.user.setChanged(true)
  }

  public async convertToIframe(href: string) {
    const index = await this.remove()

    const media = UserMedia.newMedia(
      this.user,
      {
        type: "iframe",
        cover: {
          type: "image",
          file: await this.file,
        },
        href,
      },
      "posts",
    )

    this.user.media.collections[this.collection].splice(index, 0, media)

    this.user.setChanged(true)
  }

  public async setMediaImage(blob: File) {
    this.file = this.fetchMediaFileFromBlob(blob)

    this.refresh()

    this.user.setChanged(true)
  }

  public exportConfig(): IMediaImageExportConfig {
    return {
      ...this.exportCommonConfig
    }
  }

  public async exportFiles(): Promise<IMediaImageExportMedia> {
    return {
      file: await this.file,
    }
  }

  public async export() {
    return {
      ...this.exportConfig(),
      ...await this.exportFiles()
    }
  }
}
