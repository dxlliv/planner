export default class Media {
    private readonly config: IConfigUser
    public folder: string = ''

    public raw: IRawMedia
    public type: string

    public data: IMedia = {} as IMedia

    constructor(
        config: IConfigUser,
        rawMedia: IRawMedia
    ) {
        this.config = config

        this.raw = rawMedia
        this.type = this.detectMediaType()
    }

    get file(): IMediaFile {
        return this.data.file
    }

    public setMediaFolder(folderName: string) {
        this.folder = folderName
    }

    public getMediaFile(fileName: string): IMediaFile {
        let filePath = ''

        if (fileName.startsWith("http")) {
            filePath = fileName
        } else {
            filePath = this.getMediaPath(fileName)
        }

        return {
            name: fileName,
            path: filePath,
        };
    }

    private detectMediaType() {
        let mediaType = ''

        switch (typeof this.raw) {
            case "string":
                switch(getFileExtension(this.raw)) {
                    case 'mp4':
                        mediaType = 'video'
                        break;
                    default:
                        mediaType = 'image'
                        break;
                }
                return mediaType

            case "object":
                return this.raw.type
        }
    }

    private getMediaPath(filename: string): string {
        if (filename.startsWith("http")) {
            return "";
        }

        return `users/${this.config.profile.username}${this.folder}/${filename}`;
    }
}