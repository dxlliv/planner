import UserStorage from "./userStorage.class"
import { extractUsernameFromUserId } from "../../utils/utilsPlatform"

export default class User implements IUser {
  public readonly raw: IRawUser
  public readonly origin: IUserOrigin = "" as IUserOrigin

  public platform: IUserPlatform = "" as IUserPlatform
  public id: string = ""

  public options: IUserOptions = {}
  public profile: IUserProfile = {} as IUserProfile
  public media: IUserMedia = {} as IUserMedia
  public storage: IUserStorage = {} as IUserStorage

  public status: IUserStatus = reactive({
    unsavedChanges: false,
    localChanges: false,
  })

  constructor(raw: IRawUser) {
    this.raw = raw
  }

  /**
   * Initialize user
   */
  public async init() {
    // parse user profile from raw config
    await this.loadUserProfile()

    // parse user media
    this.loadUserMedia()

    // set user id (provided, or getted from profile username)
    this.setId(this.raw.id ?? this.raw.profile.username)

    return this
  }

  public setId(id: string) {
    this.id = id
  }

  public async loadUserClient() {
    // start user indexed db
    await this.loadUserStorage()

    // check for index db user changes
    await this.storage.isContentAvailable().then(async (available) => {
      if (available) {
        // override raw user data
        await this.storage.restore()
      }
    })
  }

  public async unloadUserClient() {

  }

  /**
   * Initialize user storage
   */
  public async loadUserStorage() {
    this.storage = new UserStorage(this)

    await this.storage.init()
  }

  // these functions are overridden
  // by specific platform methods
  public async loadUserProfile() {}
  public loadUserMedia() {}

  /**
   * Check if user has unsaved changes
   */
  get hasLocalChanges() {
    return this.status.localChanges
  }

  /**
   * Check if user has local changes
   */
  get hasUnsavedChanges() {
    return this.status.unsavedChanges
  }

  /**
   * Update changed status
   *
   * @param value
   */
  public setUnsavedChanges(value: boolean) {
    this.status.unsavedChanges = value
  }

  /**
   * Update changed status
   *
   * @param value
   */
  public setLocalChanges(value: boolean) {
    this.status.localChanges = value
  }

  /**
   * Is user removable?
   */
  get isRemovable() {
    return this.origin === "storage"
  }

  /**
   * Get user route
   */
  get route() {
    return "/" + this.platform + "/" + extractUsernameFromUserId(this.id)
  }

  /**
   * Prepare user data for export
   */
  public async export(): Promise<IUserExported> {
    const exportedProfile = await this.profile.export()
    const exportedMedia = await this.media.export()

    return {
      id: this.id,
      profile: exportedProfile,
      media: exportedMedia,
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
    if (this.isRemovable || this.hasLocalChanges) {
      useUserStorageStore().removeUserFromStorageIndex({
        platform: this.platform,
        username: this.id
      })
      await this.storage.remove()

      useUserStore().unloadUser(this.id)
    }
  }

  /**
   * Reset user which has changes but its config is hard-coded
   */
  public async reset() {
    if (!this.isRemovable || this.hasLocalChanges) {
      useUserStorageStore().removeUserFromStorageIndex({
        username: this.id,
        platform: this.platform,
      })
      await this.storage.remove()

      // original raw user config is not reachable from here
      location.reload()
    }
  }
}
