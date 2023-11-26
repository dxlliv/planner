import Media from "./media.class";

export default class MediaAvatar extends Media {
    readonly #defaultAvatarFilename: string = 'avatar.jpg'

    constructor(
        rawUser: IRawUser,
        rawMedia: string
    ) {
        super(rawUser, rawMedia)

        this.data = this.parseMediaAvatar()
    }

    public parseMediaAvatar(): IMediaAvatar {
        if (typeof this.rawMedia !== 'string') {
            this.rawMedia = this.#defaultAvatarFilename
        }

        return {
            file: this.getMediaFile(this.rawMedia),
        }
    }
}