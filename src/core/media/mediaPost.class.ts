import Media from "./media.class";

export default class MediaPost extends Media {
    private readonly allowedMediaTypes: string[] = ['image', 'album', 'video', 'iframe']

    constructor(config: IConfigUser, rawMedia: IRawMedia) {
        super(config, rawMedia)

        this.setMediaFolder('/media')

        this.data = this.parseMedia(rawMedia)
    }

    get cover(): IMediaFile | number {
        if (this.type === 'video') {
            return this.data.cover
        }

        return this.data.file
    }

    get list() {
        if (this.type !== 'album') {
            return null
        }

        return this.data.list
    }

    private parseMediaVideoCover(): IMedia | number {
        if (typeof this.raw !== 'object' || !this.raw.cover) {
            return 0
        }

        switch(typeof this.raw.cover) {
            case "string":
                return {
                    type: "image",
                    file: this.getMediaFile(this.raw.cover),
                }
            case "number":
                return this.raw.cover
        }
    }

    private parseMediaIframeCover(): IMedia {
        return {
            type: "image",
            file: this.getMediaFile(this.raw.cover),
        }
    }

    public parseMedia(): IMedia {
        let parsedMedia = null

        let mediaAlbum: IMediaAlbumList = []

        switch (typeof this.raw) {

            // is it a short import?
            case "string":

                switch(getFileExtension(this.raw)) {

                    case 'mp4':
                        parsedMedia = {
                            type: "video",
                            file: this.getMediaFile(this.raw),
                            cover: 0
                        }
                        break;

                    default:
                        parsedMedia = {
                            type: "image",
                            file: this.getMediaFile(this.raw),
                        }
                        break;

                }

                break;

            // is it a regular import?
            case "object":

                switch (this.raw.type) {

                    case "image":
                        parsedMedia = {
                            type: "image",
                            file: this.getMediaFile(this.raw.name),
                        }
                        break;

                    case "album":
                        if (this.raw.list && Array.isArray(this.raw.list)) {
                            for (let albumMediaPost of this.raw.list) {
                                const albumMedia: IMedia = new MediaPost(this.config, albumMediaPost)

                                mediaAlbum.push(albumMedia)
                            }
                        }

                        parsedMedia = {
                            type: "album",
                            list: mediaAlbum,
                        }
                        break;

                    case "video":
                        // parse video cover
                        parsedMedia = {
                            type: "video",
                            file: this.getMediaFile(this.raw.name),
                            cover: this.parseMediaVideoCover()
                        }
                        break;

                    case "iframe":
                        parsedMedia = {
                            type: "iframe",
                            href: this.raw.href,
                            cover: this.parseMediaIframeCover(),
                            reel: !!this.raw.reel
                        }
                        break;

                }
                break;
        }

        return parsedMedia
    }
}