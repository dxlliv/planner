import Media from "./media.class";
import MediaImage from "./mediaImage.class";
import User from "../user/user.class";

export default class MediaVideo extends Media {
    constructor(
        rawMedia: string | IRawMedia,
        user: User
    ) {
        super(rawMedia, user)

        this.setMediaType('video')
        this.parseMediaVideo(rawMedia)
    }

    private parseMediaVideo(rawMedia: string | IRawMedia) {
        const mediaData: IMediaData = {}

        switch (typeof rawMedia) {

            case "string":
                // shortened image import
                mediaData.file = this.parseMediaFileName(rawMedia)
                mediaData.coverTime = 0
                break;

            case "object":
                if (rawMedia.file && rawMedia.file instanceof File) {
                    // regular image import from: new image / indexeddb restore
                    mediaData.file = this.parseMediaFileBlob(rawMedia.file)
                } else if (rawMedia.name) {
                    mediaData.file = this.parseMediaFileName(rawMedia.name)
                    mediaData.coverTime = 0
                }

                if (typeof rawMedia.reel !== 'undefined') {
                    mediaData.reel = Boolean(rawMedia.reel)
                    mediaData.coverTime = 0
                }

                switch (typeof rawMedia.cover) {
                    case "number":
                        mediaData.coverTime = Number(rawMedia.cover)
                        break;
                    case "string":
                    case "object":
                        mediaData.cover = new MediaImage(rawMedia.cover, this.user)
                        break;
                }
                break;
        }

        return this.setMediaData(mediaData)
    }
}