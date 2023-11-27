import {fetchFileFromUrl, getMediaFilePath, isPromise} from "../../utils/utilsFile";

export default class UserAvatar {
    readonly #defaultAvatarFilename: string = 'avatar.jpg'

    private username: string
    public file: Promise<File>

    constructor(
        rawAvatar: IRawAvatar,
        username: string,
    ) {
        this.username = username

        if (typeof rawAvatar === 'string') {
            this.file = this.parseAvatar(rawAvatar)
        } else {
            // @ts-ignore
            this.file = Promise.resolve(rawAvatar)
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
            filePath = getMediaFilePath(rawAvatar, this.username)
        }

        return fetchFileFromUrl(filePath)
    }
}