import {fetchFileFromUrl, getMediaFilePath, getFileName} from "../../utils/utilsFile";
import {generateUuidv4} from "../../utils/utilsString";
import User from "../user/user.class";

export default class Media {
    public user: User

    public raw: string | IRawMedia

    public id: string = ''
    public type: IMediaType = '' as IMediaType
    public collection: IMediaCollection = '' as IMediaCollection

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

    public refresh() {
        this.setUniqueId()
    }

    public async save() {
        await this.user.save()
    }

    public async remove() {
        const index = this.user.media[this.collection].findIndex(item => {
            return item.id === this.id
        })

        if (index > -1) {
            this.user.media[this.collection].splice(index, 1)
        }

        await this.user.save()

        return index
    }
}