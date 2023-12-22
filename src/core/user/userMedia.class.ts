import User from "../user/user.class";
import MediaImage from "../media/mediaImage.class";
import MediaVideo from "../media/mediaVideo.class";
import MediaAlbum from "../media/mediaAlbum.class";
import MediaIframe from "../media/mediaIframe.class";
import {fulfillMediaPostsForMediaExport} from "../../utils/utilsUserExport";

export default class UserMedia implements IUserMedia {
    public readonly user: User

    public posts: IMedia[] = []
    public reels: IMedia[] = []
    public stories: IMedia[] = []
    public highlights: IMedia[] = []

    constructor(user: User) {
        this.user = user
    }

    public fetch() {
        this.parseRawUserMediaPosts()
        this.parseRawUserMediaReels()
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
        const media = UserMedia.newMedia(rawMedia, this.user)
        media.setMediaCollection(collection)

        this[collection][addMethod](media)

        // refresh posts count
        this.user.profile.setPostsCount(this.posts.length)
    }

    public async export() {
        return {
            posts: await fulfillMediaPostsForMediaExport(this.posts),
            reels: await fulfillMediaPostsForMediaExport(this.reels),
            stories: await fulfillMediaPostsForMediaExport(this.stories),
            highlights: await fulfillMediaPostsForMediaExport(this.highlights),
        }
    }

    public static newMedia(rawMedia: string | IRawMedia, user: User): any {
        const mediaType = UserMedia.detectMediaType(rawMedia)

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