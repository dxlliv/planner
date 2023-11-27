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
        const storedUser = await this.database.getItem('user')

        if (storedUser) {
            this.user.parseUser(storedUser)
        }
    }

    public async save() {
        const exportedProfile = await this.user.profile.export()
        const exportedMedia = await this.user.media.export()

        this.database.setItem('user', {
            profile: exportedProfile,
            media: exportedMedia,
        })
    }
}