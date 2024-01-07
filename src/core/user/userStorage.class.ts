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
            // restore original user id (platform + username)
            this.user.id = storedUser.id

            // restore user
            this.user.raw.profile = storedUser.profile
            this.user.raw.media = storedUser.media

            this.user.setChanged(true)
        }
    }

    public async save() {
        const userExported = await this.user.getDataForExport()

        this.user.setChanged(true)

        this.database.setItem(this.user.platform, userExported)
    }

    public async remove() {
        this.database.removeItem(this.user.platform)
    }

    public async exportAsZip() {
        const userZip = await makeUserZip(this.user)

        // download user as zip
        downloadZip(`${this.user.profile.username}.zip`, userZip)
    }
}