export default class User {
    private readonly rawUser: IRawUser

    public order: number = 0
    public options: IUserOptions = {}
    public profile: IUserProfile = {} as IUserProfile
    public media: IUserMedia = {} as IUserMedia

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