import Profile from "../profile/profile.class";
import MediaManager from "../media/mediaManager.class";

export default class User {
    private readonly rawUser: IRawUser

    public order: number = 0
    public options: IUserOptions = {}

    public profile: Profile = {} as Profile
    public media: MediaManager = {} as MediaManager

    public status = reactive({
        changed: false
    })

    constructor(rawUser: IRawUser) {
        this.rawUser = rawUser

        this.parseUser()
    }

    private parseUser() {
        this.profile = new Profile(this.rawUser)
        this.media = new MediaManager(this.rawUser);
        this.options = this.rawUser.options
    }

    get isChanged() {
        return this.status.changed
    }

    public setChanged(changed: boolean) {
        this.status.changed = changed
    }

    public exportUser() {
        return {
            profile: this.profile.exportUserProfile(),
            media: this.media.exportUserMedia(),
        }
    }
}