import Media from "./media.class";
import User from "../user/user.class";

export default class MediaImage extends Media implements IMediaImage {
    constructor(
        raw: string | IRawMedia,
        user: User
    ) {
        super(raw, user)

        this.setMediaType('image')
        this.parseMediaImage(raw)
    }

    private parseMediaImage(raw: string | IRawMedia) {
        const mediaData: IMediaData = {}

        switch (typeof raw) {

            case "string":
                // shortened image import
                mediaData.file = this.parseMediaFileName(raw)
                break;

            case "object":
                if (raw.file && raw.file instanceof File) {
                    // regular image import from: new image / indexeddb restore
                    mediaData.file = this.parseMediaFileBlob(raw.file)
                } else if (typeof raw.name === 'string') {
                    // regular image import from: config.json
                    mediaData.file = this.parseMediaFileName(raw.name)
                }
                break;

        }

        return this.setMediaData(mediaData)
    }

    public setMediaImage(file: File) {
        if (!this.data.file) return

        this.data.file = this.parseMediaFileBlob(file)
    }
}