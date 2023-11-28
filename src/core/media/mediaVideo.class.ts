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
        const mediaData: IMediaData = {
            coverTime: 0
        }

        switch (typeof raw) {

            case "string":
                // shortened image import
                mediaData.file = this.parseMediaFileName(raw)
                break;

            case "object":
                if (raw.file && raw.file instanceof File) {
                    // regular image import from: new image / indexeddb restore
                    mediaData.file = this.parseMediaFileBlob(raw.file)
                } else if (raw.name) {
                    mediaData.file = this.parseMediaFileName(raw.name)
                }

                if (typeof raw.reel !== 'undefined') {
                    mediaData.reel = Boolean(raw.reel)
                }

                switch (typeof raw.cover) {
                    case "number":
                        mediaData.coverTime = Number(raw.cover)
                        break;
                    case "string":
                    case "object":
                        mediaData.cover = new MediaImage(raw.cover, this.user)
                        delete mediaData.coverTime
                        break;
                }
                break;
        }

        return this.setMediaData(mediaData)
    }

    public setCoverTime(value: number) {
        this.data.coverTime = value
    }

    public setCoverImage(file: File) {
        if (!this.data.file) return

        this.data.cover = new MediaImage({ file }, this.user)
    }

    public removeCoverImage() {
        if (!this.data.file) return

        this.data.cover = undefined
        this.data.coverTime = 0
    }
}