import {fetchFileFromUrl, getMediaFilePath, isPromise} from "../../utils/utilsFile";

export default class UserAvatar {
    public readonly user: IUser
    readonly #defaultAvatarFilename: string = 'avatar.jpg'

    public file: Promise<File>

    constructor(user: IUser) {
        this.user = user

        if (typeof this.user.raw.profile.avatar === 'string') {
            this.file = this.parseAvatar(this.user.raw.profile.avatar)
        } else {
            // @ts-ignore
            this.file = Promise.resolve(this.user.raw.profile.avatar)
        }
    }

    public parseAvatar(rawAvatar: string): Promise<File> {
        let filePath = ''

        if (!rawAvatar) {
            rawAvatar = this.#defaultAvatarFilename
        }

        if (rawAvatar.startsWith("http")) {
            filePath = rawAvatar
        } else {
            filePath = getMediaFilePath(rawAvatar, `${this.user.platform}/${this.user.raw.profile.username}`)
        }

        return fetchFileFromUrl(filePath)
    }
}