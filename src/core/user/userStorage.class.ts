import localforage from 'localforage';
import User from "./user.class";

export default class UserStorage {
    private user: User
    private database

    constructor(user: User) {
        this.user = user

        this.database = localforage.createInstance({
            name: 'planner',
            storeName: user.raw.profile.username
        })
    }

    public async isAvailable() {
        return !!(await this.database.getItem('user'))
    }

    public async restore() {
        const storedUser: null | IRawUser = await this.database.getItem('user')

        if (storedUser) {
            this.user.raw.profile = storedUser.profile
            this.user.raw.media = storedUser.media

            this.user.setChanged(true)
        }
    }

    public async save() {
        const exportedProfile = await this.user.profile.export()
        const exportedMedia = await this.user.media.export()

        this.user.setChanged(true)

        this.database.setItem('user', {
            profile: exportedProfile,
            media: exportedMedia,
        })
    }
}