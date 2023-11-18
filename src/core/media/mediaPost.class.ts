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

    public parseMedia(media: IRawMedia): IMedia {
        let parsedMedia = null

        let mediaAlbum: IMediaAlbumList = []
        let mediaVideoCover = null

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
                        if (typeof media === 'object' && media.cover) {
                            switch(typeof this.raw.cover) {
                                case "string":
                                    mediaVideoCover = {
                                        type: "image",
                                        file: this.getMediaFile(this.raw.cover),
                                    }
                                    break;
                                case "number":
                                    mediaVideoCover = this.raw.cover
                                    break;
                            }
                        }

                        parsedMedia = {
                            type: "video",
                            file: this.getMediaFile(this.raw.name),
                            cover: mediaVideoCover
                        }
                        break;

                    case "iframe":
                        parsedMedia = {
                            type: "iframe",
                            href: this.raw.href,
                        }
                        break;

                }
                break;
        }

        return parsedMedia
    }
}