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
      this.user.setLocalChanges(true)

      // restore original user id (platform + username)
      this.user.id = userChanges.id

      // restore user profile changes
      await this.user.profile.update(userChanges.profile)

      // overwrite user raw media
      // todo resolve bug #this.raw-not-available
      this.user.raw.media = userChanges.media

      // todo resolve bug #this.raw-not-available
      this.user.media.fetch('client')
    }
  }

  public async save() {
    const userExported = await this.user.export()

    this.user.setUnsavedChanges(false)
    this.user.setLocalChanges(true)

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
