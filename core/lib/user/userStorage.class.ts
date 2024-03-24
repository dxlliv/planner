import { openDB } from 'idb';

export default class UserStorage {
  private user: IUser
  private database

  constructor(user: IUser) {
    this.user = user
  }

  public async init() {
    const self = this

    this.database = await openDB("planner", 1, {
      upgrade(db) {
        db.createObjectStore(self.user.platform);
      },
    })
  }

  public async isContentAvailable() {
    return isPlannerFeatureEnabled('profileEditor') && !!(await this.database.get(
      this.user.platform,
      this.user.raw.profile.username
    ))
  }

  public async restore() {
    const userChanges: null | IRawUser = await this.database.get(
      this.user.platform,
      this.user.raw.profile.username
    )

    if (userChanges) {
      this.user.setChanged(true)

      // restore original user id (platform + username)
      this.user.id = userChanges.id

      // restore user profile changes
      await this.user.profile.update(userChanges.profile)

      // overwrite user raw media
      this.user.raw.media = userChanges.media

      this.user.media.fetch()
    }
  }

  public async save() {
    const userExported = await this.user.getDataForExport()

    this.user.setChanged(true)

    await this.database.put(
      this.user.platform,
      userExported,
      this.user.raw.profile.username
    )
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
