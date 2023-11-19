import Media from "./media.class";

export default class MediaPost extends Media {
    readonly #allowedMediaTypes: string[] = ['image', 'album', 'video', 'iframe']

    constructor(config: IConfigUser, rawMedia: IRawMedia) {
        super(config, rawMedia)

        this.setMediaFolder('/media')

        this.data = this.parseMedia()
    }

    get list() {
        if (this.type !== 'album') {
            return null
        }

        return this.data.list
    }

    public parseMedia(): IMediaData {
        let parsedMedia = null

        let mediaAlbumList: any[] = []

        switch (typeof this.raw) {

            // is it a short import?
            case "string":

                switch(getFileExtension(this.raw)) {

                    case 'mp4':
                        parsedMedia = this.getMediaVideo(this.raw, 0)
                        break;

                    default:
                        parsedMedia = this.getMediaImage(this.raw)
                        break;

                }

                break;

            // is it a regular import?
            case "object":

                switch (this.raw.type) {

                    case "image":
                        parsedMedia = this.getMediaImage(this.raw.name)
                        break;

                    case "album":
                        if (this.raw.list && Array.isArray(this.raw.list)) {
                            for (let albumMediaPost of this.raw.list) {
                                const albumMedia = new MediaPost(this.config, albumMediaPost)

                                mediaAlbumList.push(albumMedia)
                            }
                        }

                        parsedMedia = this.getMediaAlbum(mediaAlbumList)
                        break;

                    case "video":
                        // parse video cover
                        parsedMedia = this.getMediaVideo(this.raw.name, this.raw.cover)
                        break;

                    case "iframe":
                        parsedMedia = this.getMediaIframe(this.raw.href, this.raw.cover, this.raw.reel)
                        break;

                }
                break;
        }

        return parsedMedia
    }

    private getMediaImage(fileName: string) {
        return {
            file: this.getMediaFile(fileName),
        }
    }

    private getMediaVideo(fileName: string, cover?: IRawMedia | number | string, reel?: boolean) {
        if (typeof cover !== 'number') {
            cover = new MediaPost(this.config, cover)
        }

        return {
            file: this.getMediaFile(fileName),
            cover,
            reel,
        }
    }

    private getMediaAlbum(list: MediaPost[]) {
        return {
            list
        }
    }

    private getMediaIframe(href: string, cover: IRawMedia, reel?: boolean) {
        return {
            href,
            cover: new MediaPost(this.config, cover),
            reel
        }
    }
}