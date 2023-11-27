import User from "../user/user.class";
import MediaImage from "./mediaImage.class";
import MediaVideo from "./mediaVideo.class";
import MediaAlbum from "./mediaAlbum.class";
import MediaIframe from "./mediaIframe.class";
import {fulfillMediaPostsForMediaExport} from "../../utils/utilsUserExport";

export default class MediaManager {
    private readonly user: User

    public posts: MediaPost[] = []
    public reels: MediaPost[] = []
    public stories: MediaPost[] = []
    public highlights: MediaPost[] = []

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
            this.addMedia(rawMedia, 'posts')
        }
    }

    private parseRawUserMediaReels() {
        for (let rawMedia of this.user.raw.media.posts) {
            if (typeof rawMedia !== 'string' && !rawMedia.reel) {
                continue
            }

            this.addMedia(rawMedia, 'reels')
        }

        for (let rawMedia of this.user.raw.media.reels) {
            this.addMedia(rawMedia, 'reels')
        }
    }

    public addMedia(
        rawMedia: string | IRawMedia,
        collection: 'posts' | 'reels',
        addMethod: 'push' | 'unshift' = 'push'
    ) {
        const media = MediaManager.newMedia(rawMedia, this.user)

        this[collection][addMethod](media)
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
                return new MediaAlbum(rawMedia, user)
            case 'iframe':
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
                    filename = rawMedia.name
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