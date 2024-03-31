import Media from "./media.class"
import MediaImage from "./mediaImage.class"
import User from "../user/user.class"
import UserMedia from "../user/userMedia.class"
import { getFileExtension } from "../../utils/utilsFile"

export default class MediaVideo extends Media implements IMediaVideo {
  public file: Promise<IMediaFile>
  public reel: boolean = false
  public cover: undefined | IMediaImage
  public coverTime: number = 0

  constructor(
    user: User,
    raw: string | IRawMedia,
    collection?: IMediaCollection,
    from?: IMediaFrom,
  ) {
    super(user, raw, collection, from)

    this.setMediaType("video")
    this.parseMediaVideo()
  }

  public fetch() {
    this.fetchMediaVideo()
  }

  private parseMediaVideo() {
    switch (typeof this.raw) {
      case "object":
        if (typeof this.raw.reel !== "undefined") {
          this.reel = Boolean(this.raw.reel)
        }

        if (this.raw.cover && typeof this.raw.cover !== "number") {
          this.cover = new MediaImage(this.user, this.raw.cover, this.collection, this.from)
        }
        break
    }
  }

  private fetchMediaVideo() {
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

          // set raw as filename to keep memory light
          //this.raw = this.file.name
        } else if (this.raw.file && this.raw.file instanceof File) {
          // image restored from indexeddb restore
          this.file = this.fetchMediaFileFromBlob(this.raw.file)

          // set raw as filename to keep memory light
          //this.raw = this.file.name
        } else if (typeof this.raw.name === "string") {
          // regular image import from: config.json
          this.file = this.fetchMediaFileFromString(this.raw.name)
        }
        break
    }
  }

  public async setCover(file: File) {
    this.cover = new MediaImage(this.user, { file }, this.collection, this.from)

    this.user.setUnsavedChanges(true)
  }

  public async setCoverTime(value: number) {
    this.coverTime = value

    this.user.setUnsavedChanges(true)
  }

  public async removeCover() {
    this.cover = undefined
    this.coverTime = 0

    this.user.setUnsavedChanges(true)
  }

  public async convertToAlbum() {
    const mediaAlbum = UserMedia.newMedia(
      this.user,
      {
        type: "album",
        list: [
          {
            type: "image",
            file: await this.file,
          },
        ],
      },
      "posts",
    )

    const index = await this.remove()

    this.user.media.collections[this.collection].splice(index, 0, mediaAlbum)

    this.user.setUnsavedChanges(true)
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
      this.user.media.addMedia(mediaToBeCloned, "reels", {
        addMethod: 'push',
        from: 'client'
      })
    }

    this.user.setUnsavedChanges(true)
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
        file: await this.cover.file,
      }
    }

    if (!cover && this.coverTime) {
      cover = this.coverTime
    }

    return {
      file: await this.file,
      cover,
    }
  }

  public async export() {
    return {
      ...this.exportConfig(),
      ...await this.exportFiles()
    }
  }
}
