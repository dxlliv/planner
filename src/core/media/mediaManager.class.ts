import User from "../user/user.class";
import MediaImage from "./mediaImage.class";
import MediaVideo from "./mediaVideo.class";
import MediaAlbum from "./mediaAlbum.class";
import MediaIframe from "./mediaIframe.class";
import {fulfillMediaPostsForMediaExport} from "../../utils/utilsUserExport";

export default class MediaManager {
    private readonly user: User

    public posts: IMedia[] = []
    public reels: IMedia[] = []
    public stories: IMedia[] = []
    public highlights: IMedia[] = []

    constructor(user: User) {
        this.user = user

        this.parseRawUserMedia()
    }

    private parseRawUserMedia() {
        this.parseRawUserMediaPosts()
        this.parseRawUserMediaReels()
    }

    private parseRawUserMediaPosts() {
        for (let rawMedia of this.user.raw.media.posts) {
            if (typeof rawMedia !== 'string') rawMedia.collection = 'posts'

            this.addMedia(rawMedia)
        }
    }

    private parseRawUserMediaReels() {
        for (let rawMedia of this.user.raw.media.posts) {
            if (typeof rawMedia !== 'string') rawMedia.collection = 'reels'

            if (typeof rawMedia !== 'string' && rawMedia.reel) {
                rawMedia.collection = 'reels'

                this.addMedia(rawMedia)
            }
        }

        for (let rawMedia of this.user.raw.media.reels) {
            if (typeof rawMedia !== 'string') rawMedia.collection = 'reels'

            this.addMedia(rawMedia)
        }
    }

    public addMedia(
        rawMedia: string | IRawMedia,
        addMethod: 'push' | 'unshift' = 'push'
    ) {
        const media = MediaManager.newMedia(rawMedia, this.user)

        this[media.collection][addMethod](media)
    }

    public async export() {
        return {
            posts: await fulfillMediaPostsForMediaExport(this.posts),
            reels: await fulfillMediaPostsForMediaExport(this.reels),
            stories: await fulfillMediaPostsForMediaExport(this.stories),
            highlights: await fulfillMediaPostsForMediaExport(this.highlights),
        }
    }

    public static newMedia(rawMedia: string | IRawMedia, user: User) {
        const mediaType = MediaManager.detectMediaType(rawMedia)

        switch (mediaType) {

            case 'image':
                return new MediaImage(rawMedia, user)

            case 'video':
                return new MediaVideo(rawMedia, user)

            case 'album':
                if (typeof rawMedia === 'string') {
                    throw Error('Album media cannot be a string')
                }

                return new MediaAlbum(rawMedia, user)

            case 'iframe':
                if (typeof rawMedia === 'string') {
                    throw Error('Album media cannot be a string')
                }

                return new MediaIframe(rawMedia, user)
        }
    }

    private static detectMediaType(rawMedia: string | IRawMedia) {
        let filename = ''

        switch (typeof rawMedia) {
            case "string":
                // shortened media import
                filename = rawMedia
                break;

            case "object":
                // shortened album import
                if (Array.isArray(rawMedia)) {
                    return 'album'
                }

                // regular media import
                if (rawMedia.type) {
                    return rawMedia.type
                }

                // fallback
                if (rawMedia.file && rawMedia.file) {
                    filename = rawMedia.file.name
                } else {
                    if (typeof rawMedia.name === 'string') {
                        filename = rawMedia.name
                    }
                }
        }

        switch(getFileExtension(filename)) {
            case 'mp4':
                return 'video'
            default:
                return 'image'
        }
    }
}