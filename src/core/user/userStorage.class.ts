import localforage from 'localforage';
import User from "./user.class";

export default class UserStorage {
    private user: IUser
    private database

    constructor(user: IUser) {
        this.user = user

        this.database = localforage.createInstance({
            name: 'planner',
            storeName: user.raw.profile.username
        })
    }

    public async isContentAvailable() {
        return !!(await this.database.getItem(this.user.platform))
    }

    public async restore() {
        const storedUser: null | IRawUser = await this.database.getItem(this.user.platform)

        if (storedUser) {
            this.user.id = storedUser.id
            this.user.raw.profile = storedUser.profile
            this.user.raw.media = storedUser.media

            this.user.setChanged(true)
        }
    }

    public async save() {
        const exportedProfile = await this.user.profile.export()
        const exportedMedia = await this.user.media.export()

        this.user.setChanged(true)

        this.database.setItem(this.user.platform, {
            id: this.user.id,
            profile: exportedProfile,
            media: exportedMedia,
        })
    }

    public async remove() {
        this.database.removeItem(this.user.platform)
    }
}