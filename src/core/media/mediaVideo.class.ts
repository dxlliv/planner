import Media from "./media.class";
import MediaImage from "./mediaImage.class";
import User from "../user/user.class";

export default class MediaVideo extends Media implements IMediaVideo {
    constructor(
        raw: string | IRawMedia,
        user: User
    ) {
        super(raw, user)

        this.setMediaType('video')
        this.parseMediaVideo(raw)
    }

    private parseMediaVideo(raw: string | IRawMedia) {
        const mediaData: IMediaData = {}

        switch (typeof raw) {

            case "string":
                // shortened image import
                mediaData.file = this.parseMediaFileName(raw)
                mediaData.coverTime = 0
                break;

            case "object":
                if (raw.file && raw.file instanceof File) {
                    // regular image import from: new image / indexeddb restore
                    mediaData.file = this.parseMediaFileBlob(raw.file)
                } else if (raw.name) {
                    mediaData.file = this.parseMediaFileName(raw.name)
                    mediaData.coverTime = 0
                }

                if (typeof raw.reel !== 'undefined') {
                    mediaData.reel = Boolean(raw.reel)
                    mediaData.coverTime = 0
                }

                switch (typeof raw.cover) {
                    case "number":
                        mediaData.coverTime = Number(raw.cover)
                        break;
                    case "string":
                    case "object":
                        mediaData.cover = new MediaImage(raw.cover, this.user)
                        break;
                }
                break;
        }

        return this.setMediaData(mediaData)
    }
}