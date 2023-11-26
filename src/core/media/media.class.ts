import {fetchFileFromUrl} from "../../utils/utilsFile";
import {generateUuidv4} from "../../utils/utilsString";

export default class Media {
    private readonly rawUser: IRawUser
    public rawMedia: IRawMedia

    public folder = ''
    public type
    public id: string = ''

    public data = {} as IMediaData

    constructor(
        rawUser: IRawUser,
        rawMedia: string | IRawMedia
    ) {
        this.rawUser = rawUser

        this.rawMedia = rawMedia
        this.type = this.detectMediaType()
    }

    public setMediaFolder(folderName: string) {
        this.folder = folderName
    }

    public setMedia(media: IMediaData) {
        this.data = media
    }

    public setUniqueId() {
        this.id = generateUuidv4()
    }

    private detectMediaType() {
        let fileName = ''

        switch (typeof this.rawMedia) {
            case "string":
                fileName = this.rawMedia
                break;

            case "object":
                if (Array.isArray(this.rawMedia)) {
                    return 'album'
                } else {
                    if (this.rawMedia.type) {
                        return this.rawMedia.type
                    } else {
                        if (!this.rawMedia.blob) {
                            fileName = this.rawMedia.name
                        } else {
                            fileName = this.rawMedia.blob.name
                        }
                    }
                }
        }

        switch(getFileExtension(fileName)) {
            case 'mp4':
                return 'video'
            default:
                return 'image'
        }
    }

    public getMediaFile(fileName: string) {
        let filePath = ''

        if (fileName.startsWith("http")) {
            filePath = fileName
        } else {
            filePath = this.getMediaPath(fileName)
        }

        return {
            name: fileName,
            path: filePath,
            blob: fetchFileFromUrl(filePath),
        };
    }

    private getMediaPath(filename: string) {
        if (filename.startsWith("http")) {
            return "";
        }

        return `${import.meta.env.BASE_URL}user/${this.rawUser.profile.username}${this.folder}/${filename}`;
    }

    public exportMedia() {
        if (typeof this.rawMedia !== 'object') {
            return this.rawMedia
        }

        return {
            ...this.rawMedia
        }
    }
}