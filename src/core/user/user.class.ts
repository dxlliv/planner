export default class User {
    private readonly rawUser: IRawUser

    public order: number = 0
    public options: IUserOptions = {}
    public profile: IUserProfile = {}

    constructor(rawUser: IRawUser) {
        this.rawUser = rawUser

        this.parseUser()
    }

    private parseUser(): IUser {
        const data: IUser = {
            profile: {},
            options: {}
        } as IUser;

        this.profile = parseUserProfileDetails(this.rawUser)
        this.profile.media = parseUserProfileMedia(this.rawUser);
        this.options = this.rawUser.options

        return data
    }
}