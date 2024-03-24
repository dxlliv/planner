import Media from "./media.class"
import MediaImage from "./mediaImage.class"
import User from "../user/user.class"
import UserMedia from "../user/userMedia.class"
import { getFileExtension } from "../../utils/utilsFile"

export default class MediaVideo extends Media implements IMediaVideo {
  public file: IMediaFile = {} as IMediaFile
  public reel: boolean = false
  public cover: undefined | IMediaImage
  public coverTime: number = 0

  constructor(
    user: User,
    raw: string | IRawMedia,
    collection?: IMediaCollection,
  ) {
    super(user, raw, collection)

    this.setMediaType("video")
  }

  public prepareClient() {
    this.parseMediaVideo(this.raw)
  }

  private get fileNameExtension() {
    return getFileExtension(
      this.file.name,
    )
  }

  private parseMediaVideo(raw: string | IRawMedia) {
    switch (typeof raw) {
      case "string":
        // shortened image import
        this.file = this.parseMediaFileName(raw)
        break

      case "object":
        if (raw.file && raw.file instanceof File) {
          // regular image import from: new image / indexeddb restore
          this.file = this.parseMediaFileBlob(raw.file)
        } else if (raw.name) {
          // this.file = this.parseMediaFileName(raw.name)
        }

        if (typeof raw.reel !== "undefined") {
          this.reel = Boolean(raw.reel)
        }

        switch (typeof raw.cover) {
          case "number":
            this.coverTime = Number(raw.cover)
            break
          case "string":
          case "object":
            this.cover = new MediaImage(this.user, raw.cover, this.collection)
            break
        }
        break
    }
  }

  public async setCover(file: File) {
    this.cover = new MediaImage(this.user, { file }, this.collection)

    await this.save()
  }

  public async setCoverTime(value: number) {
    this.coverTime = value

    await this.save()
  }

  public async removeCover() {
    this.cover = undefined
    this.coverTime = 0

    await this.save()
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

  public get isReel() {
    return this.collection === 'reels' || this.reel
  }

  public async cloneToReel() {
    if (this.reel) {
      throw Error("Media is already defined as reel")
    }

    if (typeof this.raw === "string") {
      throw Error("Cannot clone a media if its raw is a string")
    }

    const mediaToBeCloned = await this.export()

    if (mediaToBeCloned && !Array.isArray(mediaToBeCloned)) {
      mediaToBeCloned.reel = true

      // @ts-ignore
      this.user.media.addMedia(mediaToBeCloned, "reels")
      await this.user.save()
    }

    await this.save()
  }

  public exportConfig(): IMediaVideoExportConfig {
    return {
      ...this.exportCommonConfig,
      reel: this.reel,
    }
  }

  public async exportFiles(): Promise<IMediaVideoExportMedia> {
    let cover: undefined | number | IMediaCoverExport = undefined

    // fulfill cover
    if (this.cover && this.cover.file) {
      cover = {
        type: "image",
        file: await this.cover.file.blob,
      }
    }

    if (!cover && this.coverTime) {
      cover = this.coverTime
    }

    return {
      file: await this.file?.blob,
      cover,
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
