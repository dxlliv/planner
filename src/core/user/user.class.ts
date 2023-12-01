import UserStorage from "./userStorage.class";

export default class User implements IUser {
    public readonly raw: IRawUser
    public readonly username: string = ''
    public readonly origin: string = ''

    public options: IUserOptions = {}
    public profile: IUserProfile = {} as IUserProfile
    public media: IUserMedia = {} as IUserMedia
    public storage: IUserStorage = {} as IUserStorage

    public ready: Ref<boolean> = ref(false)

    public status: Ref<{
        changed: boolean
    }> = reactive({
        changed: false
    })

    constructor(
        raw: IRawUser,
        origin: string,
    ) {
        this.raw = raw
        this.username = raw.username
        this.origin = origin

        this.storage = new UserStorage(this)
    }

    public initialize() {
        this.storage.isContentAvailable().then(async (availability) => {
            if (availability) {
                await this.storage.restore()
            }

            this.parseUserProfile()
            this.parseUserMedia()

            // when you import users from directory/zip,
            // you may want to save the profile immediately
            if (this.origin === 'storage') {
                this.parseUserMedia()
                await this.storage.save()
            }

            this.ready.value = true
        })
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
        useUserStore().unloadUser(this.username)

        useUserSelectorStore().removeUserFromSelectorList(this.username)
        useUserStorageStore().removeUserFromStorageIndex(this.username)

        if (this.isRemovable || this.hasLocalChanges) {
            await this.storage.remove()
        }
    }
}