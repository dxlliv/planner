import Media from "./media.class";
import MediaManager from "./mediaManager.class";
import User from "../user/user.class";

export default class MediaAlbum extends Media implements IMediaAlbum {
    constructor(
        raw: IRawMedia,
        user: User
    ) {
        super(raw, user)

        this.setMediaType('album')

        // shortened album imports may be an array of strings
        // so this will convert to a regular object
        if (Array.isArray(raw)) {
            // @ts-ignore
            raw = { list: raw }
        }

        this.parseMediaAlbum(raw)
    }

    private parseMediaAlbum(raw: IRawMedia) {
        const mediaData: IMediaData = {}
        const mediaAlbumList: Media[] = []

        if (raw.list && Array.isArray(raw.list)) {
            for (let rawAlbumMedia of raw.list) {
                mediaAlbumList.push(
                    MediaManager.newMedia(rawAlbumMedia, this.user)
                )
            }

            mediaData.list = mediaAlbumList
        }

        return this.setMediaData(mediaData)
    }

    public addToAlbum(file: File) {
        const newAlbumMedia = MediaManager.newMedia({ file }, this.user)

        this.data.list?.push(newAlbumMedia)
    }
}