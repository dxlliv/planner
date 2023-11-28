import {fetchFileFromUrl, getMediaFilePath, getFileName} from "../../utils/utilsFile";
import {generateUuidv4} from "../../utils/utilsString";
import User from "../user/user.class";
import MediaManager from "./mediaManager.class";
import MediaImage from "./mediaImage.class";

export default class Media implements IMedia {
    public user: User

    public raw: string | IRawMedia

    public id: string = ''
    public type: IMediaType = '' as IMediaType
    public collection: IMediaCollection = '' as IMediaCollection

    public data: IMediaData = {} as IMediaData

    constructor(
        raw: string | IRawMedia,
        user: User
    ) {
        this.raw = typeof raw === 'string' ? raw : Object.assign({}, raw)
        this.user = user

        this.setUniqueId()
    }

    public setUniqueId() {
        this.id = generateUuidv4()
    }

    public setMediaType(mediaType: IMediaType) {
        this.type = mediaType
    }

    public setMediaCollection(collection: IMediaCollection) {
        this.collection = collection
    }

    public setMediaData(mediaData: IMediaData) {
        this.data = mediaData
    }

    get isReel(): boolean {
        return !!this.data.reel
    }

    public parseMediaFileName(fileName: string): IMediaFile {
        let filePath = ''

        if (fileName.startsWith("http")) {
            filePath = fileName
            fileName = getFileName(filePath)
        } else {
            filePath = getMediaFilePath(fileName, this.user.profile.username, '/media')
        }

        return {
            name: fileName,
            path: filePath,
            blob: fetchFileFromUrl(filePath),
        }
    }

    public parseMediaFileBlob(fileBlob: File): IMediaFile {
        return {
            name: fileBlob.name,
            path: fileBlob.name,
            blob: Promise.resolve(fileBlob)
        }
    }

    public async refresh() {
        this.setUniqueId()
    }

    public convertToAlbum() {
        if (!this.data.file) return

        const index = this.remove()

        this.user.media[this.collection].splice(
            index, 0,
            MediaManager.newMedia({
                type: 'album',
                list: [this.data.file]
            }, this.user)
        )
    }

    public async convertToIframe(href: string) {
        if (!this.data.file) return

        const index = this.remove()

        this.user.media[this.collection].splice(
            index, 0,
            MediaManager.newMedia({
                type: 'iframe',
                cover: {
                    type: 'image',
                    file: await this.data.file.blob
                },
                href,
            }, this.user)
        )
    }

    public setCover(file: File) {
        this.data.cover = new MediaImage({ file }, this.user)
    }

    public removeCover() {
        this.data.cover = undefined
        this.data.coverTime = 0
    }

    public async cloneToReel() {
        if (this.data.reel) {
            throw Error('Media is already defined as reel')
        }

        if (typeof this.raw === 'string') {
            throw Error('Cannot clone a media if its raw is a string')
        }

        const mediaToBeCloned = await this.export()

        if (mediaToBeCloned && !Array.isArray(mediaToBeCloned)) {
            mediaToBeCloned.reel = true

            //const media = MediaManager.newMedia(mediaToBeCloned, this.user)
            this.user.media.addMedia(mediaToBeCloned, 'reels')
            await this.user.save()
        }
    }

    public async save() {
        await this.user.save()
    }

    public remove() {
        const index = this.user.media[this.collection].findIndex(item => item === this)

        if (index > -1) {
            this.user.media[this.collection].splice(index, 1)
        }

        return index
    }

    public async export(): Promise<IMediaExport | IMediaExport[] | undefined> {
        let exportedData: IMediaExport = {
            type: this.type
        }

        let cover = undefined
        let listExport = []

        // fulfill medias in list
        if (this.data.list) {
            for await (const media of this.data.list) {
                listExport.push({
                    file: (await media.data.file?.blob)
                })
            }
        }

        // fulfill cover
        if (this.data.cover && this.data.cover.data.file) {
            cover = {
                type: 'image',
                file: await this.data.cover.data.file.blob
            }
        }

        switch (this.type) {

            case 'image':
                exportedData.file = await this.data.file?.blob
                break

            case 'video':
                exportedData.file = await this.data.file?.blob

                if (cover) {
                    exportedData.cover = cover
                } else if (this.data.coverTime) {
                    exportedData.cover = this.data.coverTime
                }

                if (this.data.reel) {
                    exportedData.reel = this.data.reel
                }
                break

            case 'album':
                exportedData.list = listExport
                break

            case 'iframe':
                if (cover) {
                    exportedData.cover = cover
                }

                if (this.data.reel) {
                    exportedData.reel = this.data.reel
                }

                if (this.data.href) {
                    exportedData.href = this.data.href
                }
                break
        }

        return exportedData
    }
}