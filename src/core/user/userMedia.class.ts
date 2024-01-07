import User from "../user/user.class";
import MediaImage from "../media/mediaImage.class";
import MediaVideo from "../media/mediaVideo.class";
import MediaAlbum from "../media/mediaAlbum.class";
import MediaIframe from "../media/mediaIframe.class";
import { fulfillMediaFilesForExport } from "../../utils/utilsUserExport";

export default class UserMedia implements IUserMedia {
    public readonly user: User

    public posts: IMedia[] = []
    public reels: IMedia[] = []
    public stories: IMedia[] = []
    public highlights: IMedia[] = []

    private firstFetch = true

    constructor(user: User) {
        this.user = user
    }

    public fetch() {
        if (this.firstFetch === true) {
            this.firstFetch = false
        } else {
            return false
        }

        this.parseRawUserMediaPosts()
        this.parseRawUserMediaReels()

        return true
    }

    private parseRawUserMediaPosts() {
        for (let rawMedia of this.user.raw.media.posts) {
            this.addMedia(rawMedia, 'posts')
        }
    }

    private parseRawUserMediaReels() {
        for (let rawMedia of this.user.raw.media.reels) {
            this.addMedia(rawMedia, 'reels')
        }
    }

    public addMedia(
        rawMedia: string | IRawMedia,
        collection: IMediaCollection = 'posts',
        addMethod: 'push' | 'unshift' = 'push'
    ) {
        const media = UserMedia.newMedia(this.user, rawMedia, collection)

        this[collection][addMethod](media)

        // refresh posts count
        this.user.profile.setPostsCount(this.posts.length)
    }

    public async export() {
        return {
            posts: await fulfillMediaFilesForExport(this.posts),
            reels: await fulfillMediaFilesForExport(this.reels),
            stories: await fulfillMediaFilesForExport(this.stories),
            highlights: await fulfillMediaFilesForExport(this.highlights),
        }
    }

    public static newMedia(user: User, rawMedia: string | IRawMedia, collection: IMediaCollection = 'posts'): any {
        const mediaType = UserMedia.detectMediaType(rawMedia)

        switch (mediaType) {

            case 'image':
                return new MediaImage(user, rawMedia, collection)

            case 'video':
                return new MediaVideo(user, rawMedia, collection)

            case 'album':
                if (typeof rawMedia === 'string') {
                    throw Error('Album media cannot be a string')
                }

                return new MediaAlbum(user, rawMedia, collection)

            case 'iframe':
                if (typeof rawMedia === 'string') {
                    throw Error('Album media cannot be a string')
                }

                return new MediaIframe(user, rawMedia, collection)
        }
    }

    public static detectMediaType(rawMedia: string | IRawMedia) {
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