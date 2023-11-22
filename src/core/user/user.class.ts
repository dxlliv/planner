export default class User {
    private readonly rawUser: IRawUser

    public order: number = 0
    public options: IUserOptions = {}
    public profile: IUserProfile = {}
    public media: IUserMedia = {}

    constructor(rawUser: IRawUser) {
        this.rawUser = rawUser

        this.parseUser()
    }

    private parseUser(): IUser {
        const data: IUser = {} as IUser;

        this.profile = parseUserProfile(this.rawUser)
        this.media = parseUserMedia(this.rawUser);
        this.options = this.rawUser.options

        return data
    }
}