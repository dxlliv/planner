import {
  fetchFileFromUrl,
  getMediaFilePath,
  getFileName,
} from "../../utils/utilsFile"
import { generateUuidv4 } from "../../utils/utilsString"
import User from "../user/user.class"

export default class Media {
  public user: User

  public raw: string | IRawMedia

  public id: string = ""
  public type: IMediaType = "" as IMediaType
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
    raw: string | IRawMedia,
    collection?: IMediaCollection,
  ) {
    this.user = user
    this.raw = typeof raw === "string" ? raw : Object.assign({}, raw)

    if (collection) {
      this.collection = collection
    }

    this.setUniqueId()
    this.parseMediaDetail()
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
    switch (typeof this.raw) {
      case "string":
        this.caption = ""
        this.date = ""
        break

      case "object":
        if (this.raw.caption) {
          this.caption = this.raw.caption
        }
        if (this.raw.date) {
          this.date = this.raw.date
        }
        break
    }
  }

  public parseMediaFileName(fileName: string): IMediaFile {
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

    return {
      name: fileName,
      path: filePath,
      blob: fetchFileFromUrl(filePath),
    }
  }

  public parseMediaFileBlob(fileBlob: File): IMediaFile {
    return {
      name: fileBlob.name,
      path: fileBlob.name,
      blob: Promise.resolve(fileBlob),
    }
  }

  public refresh() {
    this.setUniqueId()
  }

  public async save() {
    await this.user.save()
  }

  public async remove() {
    const index = this.user.media.collections[this.collection].findIndex((item) => {
      return item.id === this.id
    })

    if (index > -1) {
      this.user.media.collections[this.collection].splice(index, 1)
    }

    await this.user.save()

    // refresh posts count
    this.user.profile.setPostsCount(this.user.media.collections.posts.length)

    return index
  }

  public async setCaption(caption: string) {
    this.caption = caption

    await this.user.save()
  }

  public async setDate(date: string) {
    this.date = date

    await this.user.save()
  }

  public get exportCommonConfig() {
    return {
      type: this.type,
      caption: this.caption,
      date: this.date,
    }
  }
}
