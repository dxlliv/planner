import { fetchFileFromUrl, getMediaFilePath } from "../../utils/utilsFile"

export default class UserAvatar {
  public readonly user: IUser
  readonly #defaultAvatarFilename: string = "avatar.jpg"

  public file: any // Promise<File>

  constructor(user: IUser, avatar: File | string) {
    this.user = user

    if (typeof avatar === "string") {
      this.file = this.parseRawAvatar(avatar)
    } else {
      // @ts-ignore
      this.file = Promise.resolve(avatar)
    }
  }

  public parseRawAvatar(rawAvatar: string): Promise<File> {
    let filePath = ""

    if (!rawAvatar) {
      rawAvatar = this.#defaultAvatarFilename
    }

    if (rawAvatar.startsWith("http")) {
      // fetch remote avatar defined from the profile config.json
      filePath = rawAvatar
    } else if (this.user.raw.path.startsWith("http")) {
      // fetch remote avatar using user.raw.path as basePath
      filePath = `${this.user.raw.path}/${rawAvatar}`
    } else {
      // fetch local avatar resolving path automatically
      filePath = getMediaFilePath(
        rawAvatar,
        `${this.user.platform}/${this.user.raw.profile.username}`,
      )
    }

    return fetchFileFromUrl(filePath)
  }

  public export() {
    if (this.isSet) {
      return this.file
    }

    return null
  }

  get isSet() {
    return !!this.file
  }
}
