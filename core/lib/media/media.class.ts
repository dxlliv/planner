import {
  fetchFileFromUrl,
  getMediaFilePath,
  getFileName,
} from "../../utils/utilsFile"
import { generateUuidv4 } from "../../utils/utilsString"
import User from "../user/user.class"

export default class Media {
  public user: User

  public raw: string | File | IRawMedia

  public id: string = ""
  public type: IMediaType = "" as IMediaType
  public from: IMediaFrom = "config"
  public collection: IMediaCollection = "" as IMediaCollection

  public reel: boolean = false
  public caption: string = ""
  public date: string = ""

  public states: any = {
    editing: false,
    detailView: false,
  }

  constructor(
    user: User,
    raw: string | File | IRawMedia,
    collection?: IMediaCollection,
    from?: IMediaFrom,
  ) {
    this.user = user
    this.raw = raw
    this.from = from

    if (collection) {
      this.collection = collection
    }

    this.setUniqueId()
    this.parseMediaDetail()
  }

  public get rawFilePath() {
    if (this.from === 'client') {
      // media has just been uploaded or loaded from storage (client-side)
      return null
    }

    // load media from /public folder
    switch (typeof this.raw) {
      case 'string':
        return getMediaFilePath(this.raw, `${this.user.platform}/${this.user.raw.profile.username}/media`)
      case 'object':
        return getMediaFilePath(this.raw.name, `${this.user.platform}/${this.user.raw.profile.username}/media`)
    }
  }

  public get isDetailView() {
    return this.states.detailView
  }

  public get isEditing() {
    return this.states.editing
  }

  public setEditing(toggle: boolean) {
    this.states.editing = toggle

    // todo fix for media albums (refactor and implement media parent)
    this.setDetailView(false)
  }

  public setDetailView(toggle: boolean) {
    this.states.detailView = toggle
  }

  public get collectionSingularized() {
    return singularizeMediaCollectionName(this.collection)
  }

  public setUniqueId() {
    this.id = generateUuidv4()
  }

  public setMediaType(mediaType: IMediaType) {
    this.type = mediaType
  }

  public setMediaCollection(collection: IMediaCollection) {
    this.collection = collection
  }

  private parseMediaDetail() {
    if (
      typeof this.raw === 'string' ||
      this.raw instanceof File
    ) {
      return
    }

    if (this.raw.caption) {
      this.caption = this.raw.caption
    }
    if (this.raw.date) {
      this.date = this.raw.date
    }
  }

  public fetchMediaFileFromString(fileName: string): Promise<IMediaFile> {
    let filePath = ""

    if (fileName.startsWith("http")) {
      filePath = fileName
      fileName = getFileName(filePath)
    } else {
      filePath = getMediaFilePath(
        fileName,
        `${this.user.platform}/${this.user.profile.username}/media`,
      )
    }

    return fetchFileFromUrl(filePath)
  }

  public fetchMediaFileFromBlob(fileBlob: File): Promise<IMediaFile> {
    return Promise.resolve(fileBlob)
  }

  public refresh() {
    this.setUniqueId()
  }

  public async remove() {
    const index = this.user.media.collections[this.collection].findIndex((item) => {
      return item.id === this.id
    })

    if (index > -1) {
      this.user.media.collections[this.collection].splice(index, 1)
    }

    // refresh posts count
    this.user.profile.setPostsCount(this.user.media.collections.posts.length)

    this.user.setChanged(true)

    return index
  }

  public async setCaption(caption: string) {
    this.caption = caption

    this.user.setChanged(true)
  }

  public async setDate(date: string) {
    this.date = date

    this.user.setChanged(true)
  }

  public get exportCommonConfig() {
    return {
      type: this.type,
      caption: this.caption,
      date: this.date,
    }
  }
}
