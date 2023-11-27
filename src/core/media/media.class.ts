import {fetchFileFromUrl, getMediaFilePath, getFileName} from "../../utils/utilsFile";
import {generateUuidv4} from "../../utils/utilsString";
import User from "../user/user.class";

export default class Media {
    private user: User

    public rawMedia: string | IRawMedia

    public id: string = ''
    public type: IMediaType = ''

    public data = {} as IMediaData

    constructor(
        rawMedia: string | IRawMedia,
        user: User
    ) {
        this.rawMedia = rawMedia
        this.user = user

        this.setUniqueId()
    }

    public setUniqueId() {
        this.id = generateUuidv4()
    }

    public setMediaType(mediaType: IMediaType) {
        this.type = mediaType
    }

    public setMediaData(mediaData: IMediaData) {
        this.data = mediaData
    }

    private parseMediaFileName(fileName: string): IMediaFile {
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

    private parseMediaFileBlob(fileBlob: File): IMediaFile {
        return {
            name: fileBlob.name,
            path: fileBlob.name,
            blob: Promise.resolve(fileBlob)
        }
    }

    public async exportMedia(): Promise<IMediaExport | IMediaExport[] | undefined> {
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
                return {
                    type: this.type,
                    file: await this.data.file?.blob
                }
            case 'video':
                return {
                    type: this.type,
                    reel: this.data.reel,
                    file: await this.data.file?.blob,
                    cover
                }
            case 'album':
                return {
                    type: this.type,
                    list: listExport
                }
            case 'iframe':
                return {
                    type: this.type,
                    reel: this.data.reel,
                    href: this.data.href,
                    cover
                }
        }
    }
}