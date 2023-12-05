import Media from "./media.class";
import MediaImage from "./mediaImage.class";
import User from "../user/user.class";

export default class MediaIframe extends Media implements IMediaIframe {
    public reel: boolean = false
    public href: string = ''
    public cover: undefined | IMediaImage

    constructor(
        raw: IRawMedia,
        user: User
    ) {
        super(raw, user)

        this.setMediaType('iframe')
        this.parseMediaIframe(raw)
    }

    private parseMediaIframe(raw: IRawMedia) {
        // set max quality to youtube embed videos
        if (raw.href) {
            let href = raw.href

            if (href.startsWith('https://youtube.com/embed/')) {
                href = href + '?autoplay=1&version=3&vq=hd1080'
            }

            this.href = href
        }

        if (raw.reel) {
            this.reel = raw.reel
        }

        if (raw.cover && typeof raw.cover !== 'number') {
            this.cover = new MediaImage(raw.cover, this.user)
        }
    }

    public async setCover(file: File) {
        this.cover = new MediaImage({ file }, this.user)

        await this.save()
    }

    public async removeCover() {
        this.cover = undefined

        await this.save()
    }

    public async export(): Promise<IMediaIframeExport> {
        let cover = undefined

        // fulfill cover
        if (this.cover && this.cover.file) {
            cover = {
                type: 'image',
                file: await this.cover.file.blob
            }
        }

        return {
            type: this.type,
            reel: this.reel,
            href: this.href,
            cover,
        }
    }
}