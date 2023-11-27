import Media from "./media.class";
import MediaManager from "./mediaManager.class";
import User from "../user/user.class";

export default class MediaIframe extends Media {
    constructor(
        rawMedia: string[] | IRawMedia,
        user: User
    ) {
        super(rawMedia, user)

        this.setMediaType('album')
        this.parseMediaAlbum(rawMedia)
    }

    private parseMediaAlbum(rawMedia: string[] | IRawMedia) {
        const mediaData: IMediaData = {}
        const mediaAlbumList: Media[] = []

        if (Array.isArray(rawMedia)) {
            rawMedia = { list: rawMedia }
        }

        if (rawMedia.list && Array.isArray(rawMedia.list)) {
            for (let rawAlbumMedia of rawMedia.list) {
                mediaAlbumList.push(
                    MediaManager.newMedia(rawAlbumMedia, this.user)
                )
            }

            mediaData.list = mediaAlbumList
        }

        return this.setMediaData(mediaData)
    }
}