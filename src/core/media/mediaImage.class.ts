import Media from "./media.class";
import User from "../user/user.class";
import UserMedia from "../user/userMedia.class";

export default class MediaImage extends Media implements IMediaImage {
    public file: IMediaFile = {} as IMediaFile

    constructor(
        raw: string | IRawMedia,
        user: User
    ) {
        super(raw, user)

        this.setMediaType('image')
        this.parseMediaImage(raw)
    }

    private parseMediaImage(raw: string | IRawMedia) {
        switch (typeof raw) {

            case "string":
                // shortened image import
                this.file = this.parseMediaFileName(raw)
                break;

            case "object":
                if (raw.file && raw.file instanceof File) {

                    // regular image import from: new image / indexeddb restore
                    this.file = this.parseMediaFileBlob(raw.file)

                } else if (typeof raw.name === 'string') {

                    // regular image import from: config.json
                    this.file = this.parseMediaFileName(raw.name)

                }
                break;

        }
    }

    public async convertToAlbum() {
        const mediaAlbum = UserMedia.newMedia({
            type: 'album',
            list: [
                {
                    type: 'image',
                    file: await this.file.blob
                }
            ]
        }, this.user)

        const index = await this.remove()

        this.user.media[this.collection].splice(index, 0, mediaAlbum)

        await this.save()
    }

    public async convertToIframe(href: string) {
        const index = await this.remove()

        const media = UserMedia.newMedia({
            type: 'iframe',
            cover: {
                type: 'image',
                file: await this.file.blob
            },
            href,
        }, this.user)

        this.user.media[this.collection].splice(index, 0, media)

        await this.save()
    }

    public async setMediaImage(blob: File) {
        this.file = this.parseMediaFileBlob(blob)

        await this.save()
    }

    public async export(): Promise<IMediaImageExport> {
        return {
            type: this.type,
            file: await this.file?.blob
        }
    }
}