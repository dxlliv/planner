import {fetchFileFromUrl, getFileName} from "../../utils/utilsFile";
import {generateUuidv4} from "../../utils/utilsString";

export default class Media {
    public readonly rawUser: IRawUser
    public rawMedia: string | IRawMedia

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

    public parseMediaFile(fileName: string): IMediaFile {
        let filePath = ''

        if (fileName.startsWith("http")) {
            filePath = fileName
            fileName = getFileName(filePath)
        } else {
            filePath = this.parseMediaPath(fileName)
        }

        return {
            name: fileName,
            path: filePath,
            blob: fetchFileFromUrl(filePath),
        };
    }

    private parseMediaPath(fileName: string) {
        if (fileName.startsWith("http")) {
            return "";
        }

        return `${import.meta.env.BASE_URL}user/${this.rawUser.profile.username}${this.folder}/${fileName}`;
    }

    public exportMedia(): IMediaExport | IMediaExport[] | undefined {
        switch (this.type) {
            case 'image':
                return {
                    type: this.type,
                    file: this.data.file?.blob
                }
            case 'video':
                return {
                    type: this.type,
                    reel: this.data.reel,
                    file: this.data.file?.blob,
                    cover: this.data.cover?.data.file?.blob
                }
            case 'album':
                return {
                    type: this.type,
                    list: this.data.list?.map(media => {
                        return {
                            file: media.data.file?.blob
                        }
                    })
                }
            case 'iframe':
                return {
                    type: this.type,
                    reel: this.data.reel,
                    href: this.data.href,
                    cover: this.data.cover?.data.file?.blob
                }
        }
    }
}