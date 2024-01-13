import {
  fetchFileFromUrl,
  getMediaFilePath,
  getFileName,
} from "../../utils/utilsFile"
import { generateUuidv4 } from "../../utils/utilsString"
import User from "../user/user.class"
import { IMediaCollection } from "../../types"

export default class Media {
  public user: User

  public raw: string | IRawMedia

  public id: string = ""
  public type: IMediaType = "" as IMediaType
  public collection: IMediaCollection = "" as IMediaCollection

  public caption: string = ""
  public date: string = ""

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
}
