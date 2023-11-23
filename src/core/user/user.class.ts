export default class User {
    private readonly rawUser: IRawUser

    public order: number = 0
    public options: IUserOptions = {}
    public profile: IUserProfile = {} as IUserProfile
    public media: IUserMedia = {} as IUserMedia

    public status = reactive({
        changed: false
    })

    constructor(rawUser: IRawUser) {
        this.rawUser = rawUser

        this.parseUser()
    }

    private parseUser(): IUser {
        const data: IUser = {} as IUser;

        this.profile = {
            ...parseUserProfile(this.rawUser),
            posts_count: computed(() => this.media.posts.length)
        }
        this.media = parseUserMedia(this.rawUser);
        this.options = this.rawUser.options

        return data
    }

    get isChanged() {
        return this.status.changed
    }

    public setChanged(changed: boolean) {
        this.status.changed = changed
    }

    public exportUser() {
        return {
            profile: exportUserProfile(this.profile),
            media: exportUserMedia(this.media),
        }
    }

    public writeUserChanges() {

    }
}