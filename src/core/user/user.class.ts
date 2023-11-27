import Profile from "../profile/profile.class";
import MediaManager from "../media/mediaManager.class";
import UserStorage from "./userStorage.class";

export default class User {
    public readonly raw: IRawUser

    public order: number = 0
    public options: IUserOptions = {}

    public profile: Profile = {} as Profile
    public media: MediaManager = {} as MediaManager
    public storage: UserStorage = {} as UserStorage

    public ready: Ref<boolean> = ref(false)

    public status = reactive({
        changed: false
    })

    constructor(raw: IRawUser) {
        this.raw = raw
        this.storage = new UserStorage(this)

        this.storage.isAvailable().then(async available => {
            if (available) {
                await this.storage.restore()
            } else {
                this.parseUser()
            }

            this.ready.value = true
        })
    }

    public parseUser() {
        this.profile = new Profile(this)
        this.media = new MediaManager(this);
        this.options = this.raw.options
    }

    get isChanged() {
        return this.status.changed
    }

    public async saveChanges() {
        await this.storage.save()
    }
}