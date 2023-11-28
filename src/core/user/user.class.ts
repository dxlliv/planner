import UserProfile from "./userProfile.class";
import UserStorage from "./userStorage.class";
import MediaManager from "../media/mediaManager.class";

export default class User {
    public readonly raw: IRawUser

    public order: number = 0
    public options: IUserOptions = {}

    public profile: UserProfile = {} as UserProfile
    public storage: UserStorage = {} as UserStorage
    public media: MediaManager = {} as MediaManager

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
            }

            this.parseUserOptions()
            this.parseUserProfile()

            this.ready.value = true
        })
    }

    public parseUserOptions() {
        this.options = this.raw.options
    }

    public parseUserProfile() {
        this.profile = new UserProfile(this)
    }

    public parseUserMedia() {
        this.media = new MediaManager(this);
    }

    get isChanged() {
        return this.status.changed
    }

    public setChanged(value: boolean) {
        this.status.changed = value
    }

    public async save() {
        await this.storage.save()
    }
}