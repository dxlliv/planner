import Media from "./media.class";
import {getFileName} from "../../utils/utilsFile";

export default class MediaPost extends Media {
    readonly #allowedMediaTypes: string[] = ['image', 'album', 'video', 'iframe']

    constructor(
        rawUser: IRawUser,
        rawMedia: string | IRawMedia
    ) {
        super(rawUser, rawMedia)

        this.setMediaFolder('/media')

        const data = this.parseMedia()

        if (data) {
            // set media data
            this.setMedia(data)

            // set media unique id
            this.setUniqueId()
        }
    }

    /**
     * Media can be simply defined with a string (perhaps "1.jpg")
     * or in an exhaustive way defining all of its options
     */
    public parseMedia(): IMediaData {
        switch (typeof this.rawMedia) {
            case "string":
                return this.parseMediaShortImport(this.rawMedia)
            case "object":
                if (this.rawMedia.blob) {
                    // it already a blob
                    return {
                        file: {
                            name: getFileName(this.rawMedia.blob.name),
                            path: this.rawMedia.blob.name,
                            blob: this.rawMedia.blob
                        },
                    }
                }

                if (!this.#allowedMediaTypes.includes(this.rawMedia.type) && !Array.isArray(this.rawMedia)) {
                    throw Error('Media type not recognized')
                }

                return this.parseMediaRegularImport(this.rawMedia)
        }
    }

    /**
     * Parse media with short import
     *
     * @param rawMediaFileName
     * @private
     */
    private parseMediaShortImport(rawMediaFileName: string): IMediaData {
        switch(getFileExtension(rawMediaFileName)) {
            case 'mp4':
                return this.getMediaVideo({
                    name: rawMediaFileName
                })
            default:
                return this.getMediaImage({
                    name: rawMediaFileName
                })

        }
    }

    /**
     * Parse media with regular import
     *
     * @param rawMedia
     */
    public parseMediaRegularImport(rawMedia: any): IMediaData {
        // albums may be defined as simple arrays
        if (Array.isArray(rawMedia)) {
            return this.getMediaAlbum(rawMedia)
        }

        switch (rawMedia.type) {
            case "image":
                return this.getMediaImage(rawMedia)
            case "video":
                return this.getMediaVideo(rawMedia)
            case "album":
                return this.getMediaAlbum(rawMedia)
            case "iframe":
                return this.getMediaIframe(rawMedia)
            default:
                throw Error('Media not supported')
        }
    }

    private getMediaImage(rawMedia: IRawMediaImage): IMediaData {
        return {
            file: this.getMediaFile(rawMedia.name),
        }
    }

    private getMediaVideo(rawMedia: IRawMediaVideo): IMediaData {
        const mediaData: IMediaData = {
            file: this.getMediaFile(rawMedia.name),
            reel: !!rawMedia.reel,
        }

        switch (typeof rawMedia.cover) {
            case "number":
                mediaData.coverTime = Number(rawMedia.cover)
                break;
            case "string":
                mediaData.cover = new MediaPost(this.rawUser, rawMedia.cover)
                break;
        }

        return mediaData
    }

    private getMediaAlbum(rawMedia: any): IMediaData {
        const mediaAlbumList: MediaPost[] = []

        if (Array.isArray(rawMedia)) {
            rawMedia = {
                list: rawMedia
            }
        }

        if (rawMedia.list && Array.isArray(rawMedia.list)) {
            for (let albumMediaPost of rawMedia.list) {
                const albumMedia = new MediaPost(this.rawUser, albumMediaPost)

                mediaAlbumList.push(albumMedia)
            }
        }

        return {
            list: mediaAlbumList
        }
    }

    private getMediaIframe(rawMedia: IRawMediaIframe): IMediaData {
        // set max quality to youtube embed videos
        if (rawMedia.href && rawMedia.href.startsWith('https://youtube.com/embed/')) {
            rawMedia.href = rawMedia.href + '?autoplay=1&version=3&vq=hd1080'
        }

        const mediaData: IMediaData = {
            href: rawMedia.href,
            reel: rawMedia.reel,
        }

        if (rawMedia.cover) {
            mediaData.cover = new MediaPost(this.rawUser, rawMedia.cover)
        }

        return mediaData
    }
}