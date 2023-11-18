import Media from "./media.class";

export default class MediaAvatar extends Media {
    readonly #defaultAvatarFilename: string = 'avatar.jpg'

    constructor(
        config: IConfigUser,
        rawMedia: string
    ) {
        super(config, rawMedia)

        this.data = this.parseMediaAvatar()
    }

    public parseMediaAvatar(): IMedia {
        if (typeof this.raw !== 'string') {
            throw Error('Avatar is not a string')
        }

        return {
            type: "image",
            file: this.getMediaFile(this.raw),
        }
    }
}