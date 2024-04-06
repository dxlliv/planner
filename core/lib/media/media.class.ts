import { fetchFileFromUrl } from "../../utils/utilsFile"
import { generateUuidv4 } from "../../utils/utilsString"

export default class Media {
  public user: IUser

  public raw: string | File | IRawMedia

  public id: string = ""
  public type: IMediaType = "" as IMediaType
  public from: IMediaFrom = "config"
  public collection: IMediaCollection = "" as IMediaCollection

  public reel: boolean = false

  public title: string = ""
  public slug: string = ""
  public link: string = ""
  public caption: string = ""
  public date: string = ""

  public states: {
    editing: boolean
    detailView: boolean
  } = {
    editing: false,
    detailView: false,
  }

  constructor(
    user: IUser,
    raw: string | File | IRawMedia,
    collection: IMediaCollection,
    from: IMediaFrom,
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

  public get route() {
    const baseRoute = `${this.user.route}/${this.collection}`

    if (this.slug) {
      return `${baseRoute}/${this.slug}`
    }

    return `${baseRoute}/${this.id}`
  }

  public get externalLink() {
    if (!this.link) {
      return ""
    }
    
    if (this.link.startsWith('http')) {
      return this.link
    } else {
      switch(this.user.platform) {
        case "instagram":
          return `https://instagram.com/${this.link}`
      }
    }
  }

  public get seoMeta() {
    return {
      title: `${this.title} - ${this.user.profile.username}`,
      description: this.caption,
      ogImage: this.rawFilePath,
      twitterCard: 'summary',
    }
  }

  public get rawFilePath() {
    if (this.from === 'client') {
      // media has just been uploaded or loaded from storage (client-side)
      return null
    }

    // load media from /public folder
    switch (typeof this.raw) {
      case 'string':
        return this.getFilePath(this.raw)
      case 'object':
        if (!this.raw.name) {
          return null
        }

        return this.getFilePath(this.raw.name)
    }
  }

  public get isReel() {
    return this.collection === 'reels' || this.reel
  }

  public get isEditing() {
    return this.states.editing
  }

  public setEditing(toggle: boolean) {
    this.states.editing = toggle

    // todo fix for media albums (refactor and implement media parent)
    this.setDetailView(false)
  }

  public get isDetailView() {
    return this.states.detailView
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

    if (this.raw.link) {
      this.link = this.raw.link
    }

    if (this.raw.date) {
      this.date = this.raw.date
    }

    if (this.raw.title) {
      this.title = this.raw.title
    }

    if (this.raw.slug) {
      this.slug = this.raw.slug
    }
  }

  public fetchMediaFileFromString(fileName: string): Promise<File> {
    let filePath = ""

    if (fileName.startsWith("http")) {
      filePath = fileName
    } else {
      filePath = this.getFilePath(fileName)
    }

    return fetchFileFromUrl(filePath)
  }

  /**
   * Resolve media file path
   *
   * @param filename
   */
  private getFilePath(filename: string) {
    const plannerAppBaseURL = useNuxtApp().$config.app.baseURL
    const basePath = `${this.user.raw.basePath}/media`

    // this is needed to avoid errors when content is restored from indexed db
    if (!filename) {
      return ''
    }

    if (filename.startsWith("http")) {
      return filename
    }

    if (basePath.startsWith("http")) {
      return `${basePath}/${filename}`
    }

    return `${plannerAppBaseURL}user/${basePath}/${filename}`
  }

  public fetchMediaFileFromBlob(fileBlob: File): Promise<File> {
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

    this.user.setUnsavedChanges(true)

    return index
  }

  public async setCaption(caption: string) {
    this.caption = caption

    this.user.setUnsavedChanges(true)
  }

  public async setDate(date: string) {
    this.date = date

    this.user.setUnsavedChanges(true)
  }

  public get exportCommonConfig() {
    const config: any = {
      type: this.type,
    }

    if (this.title) config.title = this.title
    if (this.slug) config.slug = this.slug
    if (this.caption) config.caption = this.caption
    if (this.date) config.date = this.date

    return config
  }
}
