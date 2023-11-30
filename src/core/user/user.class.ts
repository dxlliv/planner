import UserProfile from "./userProfile.class";
import UserStorage from "./userStorage.class";
import MediaManager from "../media/mediaManager.class";

export default class User {
    public readonly raw: IRawUser
    public readonly origin: string = ''

    public options: IUserOptions = {}

    public profile: UserProfile = {} as UserProfile
    public storage: UserStorage = {} as UserStorage
    public media: MediaManager = {} as MediaManager

    public ready: Ref<boolean> = ref(false)

    public status = reactive({
        changed: false
    })

    constructor(raw: IRawUser, origin: string, storeImmediately: boolean = false) {
        this.raw = raw
        this.origin = origin
        this.storage = new UserStorage(this)

        this.storage.isAvailable().then(async available => {
            if (available) {
                await this.storage.restore()
            }

            this.parseUserOptions()
            this.parseUserProfile()

            // when you import users from directory/zip,
            // you may want to save the profile immediately
            if (storeImmediately) {
                this.parseUserMedia()
                await this.save()
            }

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

    get hasLocalChanges() {
        return this.status.changed
    }

    get isRemovable() {
        return this.origin !== 'config'
    }

    public setChanged(value: boolean) {
        this.status.changed = value
    }

    public async save() {
        await this.storage.save()
    }

    public async remove() {
        useUserStore().unloadUser(this.profile.username)

        useUserSelectorStore().removeUserFromSelectorList(this.profile.username)
        useUserStorageStore().removeUserFromStorageIndex(this.profile.username)

        if (this.isRemovable || this.hasLocalChanges) {
            await this.storage.remove()
        }

        return true
    }
}