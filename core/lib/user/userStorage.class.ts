import { openDB } from 'idb';

export default class UserStorage {
  private user: IUser
  private database: any

  // @ts-ignore
  constructor(user: User) {
    this.user = user
  }

  public async init() {
    const self = this

    this.database = await openDB<IDatabase>("planner", 1, {
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
      if (userChanges.id) {
        this.user.setId(userChanges.id)
      }

      // restore user profile changes
      await this.user.profile.update(userChanges.profile, true)

      // overwrite user raw media
      this.user.raw.media = userChanges.media

      this.user.media.importRawUserMediaConfig('client')
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
