import Media from "./media.class"
import UserMedia from "../user/userMedia.class"

export default class MediaAlbum extends Media implements IMediaAlbum {
  public list: (IMediaImage | IMediaVideo)[] = []
  public listIndex: number = 0

  constructor(
    user: IUser,
    raw: IRawMedia,
    collection: IMediaCollection,
    from: IMediaFrom,
  ) {
    super(user, raw, collection, from)

    this.setMediaType("album")

    this.parseMediaAlbum()
  }

  public fetch() {
    if (this.list.length > 0) {
      for (const media of this.list) {
        media.fetch()
      }
    }
  }

  private parseMediaAlbum() {
    const mediaAlbumList: (IMediaImage | IMediaVideo)[] = []

    if (Array.isArray(this.raw)) {
      this.raw = { list: this.raw }
    }

    if (typeof this.raw === 'string' || this.raw instanceof File) {
      return
    }

    if (this.raw.list && Array.isArray(this.raw.list)) {

      for (let rawAlbumMedia of this.raw.list) {
        mediaAlbumList.push(UserMedia.newMedia(this.user, rawAlbumMedia, 'posts', this.from))
      }

      this.list = mediaAlbumList
    }
  }

  get currentIndex() {
    return this.listIndex + 1
  }

  get itemsCount() {
    return this.list.length
  }

  public async addToAlbum(file: File) {
    const newAlbumMedia = UserMedia.newMedia(this.user, { file })

    this.list?.splice(this.listIndex + 1, 0, newAlbumMedia)
    this.slideToNextListItem()
    this.refresh()

    this.user.setUnsavedChanges(true)
  }

  public async removeFromAlbum() {
    const mediaIndexToRemove = this.listIndex

    this.list?.splice(mediaIndexToRemove, 1)
    this.slideToPrevListItem()
    this.refresh()

    this.user.setUnsavedChanges(true)
  }

  public async setMediaAlbumImage(blob: File) {
    this.list[this.listIndex].file = this.fetchMediaFileFromBlob(blob)

    this.refresh()

    this.user.setUnsavedChanges(true)
  }

  public setListIndex(index: number) {
    this.listIndex = index
  }

  public slideToPrevListItem() {
    this.listIndex--

    if (this.listIndex < 0) {
      this.listIndex = this.list.length - 1
    }
  }

  public slideToNextListItem() {
    this.listIndex++

    if (this.listIndex === this.list.length) {
      this.listIndex = 0
    }
  }

  public exportConfig(): IMediaAlbumExportConfig {
    return {
      ...this.exportCommonConfig,
    }
  }

  public async exportFiles(): Promise<IMediaAlbumExportMedia> {
    let exportedList: any = []

    if (this.list) {
      for await (const media of this.list) {
        exportedList.push({
          type: media.type,
          file: await media.file,
        })
      }
    }

    return {
      ...this.exportConfig(),
      list: exportedList,
    }
  }

  public async export() {
    return {
      ...this.exportConfig(),
      ...await this.exportFiles()
    }
  }
}
