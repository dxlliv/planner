import UserStorage from "./userStorage.class";
import {extractUsernameFromUserId} from "../../utils/utilsPlatform";

export default class User implements IUser {
    public readonly raw: IRawUser
    public readonly origin: string = ''

    public platform: IPlatforms = ''
    public id: string = ''

    public options: IUserOptions = {}
    public profile: IUserProfile = {} as IUserProfile
    public media: IUserMedia = {} as IUserMedia
    public storage: IUserStorage = {} as IUserStorage

    public ready: Ref<boolean> = ref(false)

    public status: {
        changed: boolean
    } = reactive({
        changed: false
    })

    constructor(
        raw: IRawUser,
        origin: string,
    ) {
        this.raw = raw
        this.origin = origin

        this.storage = new UserStorage(this)
    }

    public async initialize() {
        await this.initializeUserStorage()

        // parse profile
        this.initializeUserProfile()
        this.initializeUserMedia()

        // when you import users from directory/zip,
        // you may want to save the profile immediately
        if (this.origin === 'storage') {
            this.media.fetch()

            // all this sh1t should be refactored again
            setTimeout(() => this.storage.save(), 1000)
        }

        // set user as ready
        this.ready.value = true
    }

    public async initializeUserStorage() {
        // check for storage user data availability
        await this.storage.isContentAvailable().then(async (availability) => {
            if (availability) {
                // override raw user data
                await this.storage.restore()
            }
        })
    }

    // these functions are overridden
    // by specific platform methods
    public initializeUserProfile() {}
    public initializeUserMedia() {}

    get hasLocalChanges() {
        return this.status.changed
    }

    get isRemovable() {
        return this.origin !== 'config'
    }

    public setChanged(value: boolean) {
        this.status.changed = value
    }

    get route() {
        const config = useConfig()

        return {
            name: 'user',
            params: {
                platform: config.platform.default === this.platform ? undefined : this.platform,
                // todo improve and find a standard for usernames
                username: extractUsernameFromUserId(this.id),
            },
        }
    }

    /**
     * Save user to indexed db
     */
    public async save() {
        await this.storage.save()
    }

    /**
     * Remove user.
     *
     * This only work for local users,
     * those are defined in config cannot be removed
     */
    public async remove() {
        useUserStore().unloadUser(this.id)

        useUserSelectorStore().removeUserFromSelectorList(this.id)
        useUserStorageStore().removeUserFromStorageIndex(this.id)

        if (this.isRemovable || this.hasLocalChanges) {
            await this.storage.remove()
        }
    }
}