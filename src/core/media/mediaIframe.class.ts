import Media from "./media.class";
import MediaImage from "./mediaImage.class";
import User from "../user/user.class";

export default class MediaIframe extends Media implements IMediaIframe {
    constructor(
        raw: IRawMedia,
        user: User
    ) {
        super(raw, user)

        this.setMediaType('iframe')
        this.parseMediaIframe(raw)
    }

    private parseMediaIframe(raw: IRawMedia) {
        const mediaData: IMediaData = {}

        // set max quality to youtube embed videos
        if (raw.href) {
            let href = raw.href

            if (href.startsWith('https://youtube.com/embed/')) {
                href = href + '?autoplay=1&version=3&vq=hd1080'
            }

            mediaData.href = href
        }

        if (raw.reel) {
            mediaData.reel = raw.reel
        }

        if (raw.cover && typeof raw.cover !== 'number') {
            mediaData.cover = new MediaImage(raw.cover, this.user)
        }

        return this.setMediaData(mediaData)
    }
}