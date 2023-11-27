import Media from "./media.class";
import MediaManager from "./mediaManager.class";
import User from "../user/user.class";

export default class MediaAlbum extends Media {
    constructor(
        rawMedia: IRawMedia,
        user: User
    ) {
        super(rawMedia, user)

        this.setMediaType('album')

        // shortened album imports may be an array of strings
        // so this will convert to a regular object
        if (Array.isArray(rawMedia)) {
            // @ts-ignore
            rawMedia = { list: rawMedia }
        }

        this.parseMediaAlbum(rawMedia)
    }

    private parseMediaAlbum(rawMedia: IRawMedia) {
        const mediaData: IMediaData = {}
        const mediaAlbumList: Media[] = []


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