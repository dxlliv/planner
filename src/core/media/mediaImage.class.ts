import Media from "./media.class";
import User from "../user/user.class";

export default class MediaImage extends Media {
    constructor(
        rawMedia: string | IRawMedia,
        user: User
    ) {
        super(rawMedia, user)

        this.setMediaType('image')
        this.parseMediaImage(rawMedia)
    }

    private parseMediaImage(rawMedia: string | IRawMedia) {
        const mediaData: IMediaData = {}

        switch (typeof rawMedia) {

            case "string":
                // shortened image import
                mediaData.file = this.parseMediaFileName(rawMedia)
                break;

            case "object":
                if (rawMedia.file && rawMedia.file instanceof File) {
                    // regular image import from: new image / indexeddb restore
                    mediaData.file = this.parseMediaFileBlob(rawMedia.file)
                } else {
                    // regular image import from: config.json
                    mediaData.file = this.parseMediaFileName(rawMedia.name)
                }
                break;

        }

        return this.setMediaData(mediaData)
    }
}