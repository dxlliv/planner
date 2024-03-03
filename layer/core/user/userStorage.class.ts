import { openDB } from 'idb';

export default class UserStorage {
  private user: IUser
  private database

  constructor(user: IUser) {
    this.user = user
  }

  public async init() {
    this.database = await openDB("planner", 1, {
      upgrade(db) {
        db.createObjectStore('instagram');
      },
    })
  }

  public async isContentAvailable() {
    return !!(await this.database.get(
      this.user.platform,
      this.user.raw.profile.username
    ))
  }

  public async restore() {
    const storedUser: null | IRawUser = await this.database.get(
      this.user.platform,
      this.user.raw.profile.username
    )

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

    await this.database.put(this.user.platform, userExported, this.user.raw.profile.username)
  }

  public async remove() {
    await this.database.delete(this.user.platform, this.user.raw.profile.username)
  }

  public async exportAsZip() {
    const userZip = await makeUserZip(this.user)

    // download user as zip
    downloadZip(`${this.user.profile.username}.zip`, userZip)
  }
}
