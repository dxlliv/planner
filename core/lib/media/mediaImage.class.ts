import Media from "./media.class"
import User from "../user/user.class"
import UserMedia from "../user/userMedia.class"

export default class MediaImage extends Media implements IMediaImage {
  public file: IMediaFile = {} as IMediaFile

  constructor(
    user: User,
    raw: string | IRawMedia,
    collection?: IMediaCollection,
  ) {
    super(user, raw, collection)

    this.setMediaType("image")
  }

  public prepareClient() {
    this.parseMediaImage(this.raw)
  }

  private get fileNameExtension() {
    return getFileExtension(
      this.file.name,
    )
  }

  private parseMediaImage(raw: string | IRawMedia) {
    switch (typeof raw) {
      case "string":
        // shortened image import
        this.file = this.parseMediaFileName(raw)
        break

      case "object":
        if (raw.file && raw.file instanceof File) {
          // regular image import from: new image / indexeddb restore
          this.file = this.parseMediaFileBlob(raw.file)
        } else if (typeof raw.file.name === "string") {
          // regular image import from: config.json
          this.file = this.parseMediaFileName(raw.file.name)
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
          {
            type: "image",
            file: await this.file.blob,
          },
        ],
      },
      "posts",
    )

    const index = await this.remove()

    this.user.media.collections[this.collection].splice(index, 0, mediaAlbum)

    await this.save()
  }

  public async convertToIframe(href: string) {
    const index = await this.remove()

    const media = UserMedia.newMedia(
      this.user,
      {
        type: "iframe",
        cover: {
          type: "image",
          file: await this.file.blob,
        },
        href,
      },
      "posts",
    )

    this.user.media.collections[this.collection].splice(index, 0, media)

    await this.save()
  }

  public async setMediaImage(blob: File) {
    this.file = this.parseMediaFileBlob(blob)

    await this.save()
  }

  public exportConfig(): IMediaImageExportConfig {
    return {
      ...this.exportCommonConfig
    }
  }

  public async exportFiles(): Promise<IMediaImageExportMedia> {
    return {
      file: await this.file?.blob,
    }
  }

  public exportWithDesiredName(desiredName: string): string {
    if (this.file && this.file.blob) {
      return `${this.collectionSingularized}-${desiredName}.${this.fileNameExtension}`
    }

    return ''
  }

  public async export() {
    return {
      ...this.exportConfig(),
      ...await this.exportFiles()
    }
  }
}
