import UserStorage from "./userStorage.class"
import { extractUsernameFromUserId } from "../../utils/utilsPlatform"

export default class User implements IUser {
  public readonly raw: IRawUser
  public readonly origin: string = ""

  public platform: IPlatforms = ""
  public id: string = ""

  public options: IUserOptions = {}
  public profile: IUserProfile = {} as IUserProfile
  public media: IUserMedia = {} as IUserMedia
  public storage: IUserStorage = {} as IUserStorage

  public ready: Ref<boolean> = ref(false)

  public status: {
    changed: boolean
  } = reactive({
    changed: false,
  })

  constructor(raw: IRawUser, origin: string) {
    this.raw = raw
    this.origin = origin
  }

  /**
   * Initialize user
   */
  public async init() {
    // start user indexed db
    await this.initUserStorage()

    // parse user profile
    await this.initUserProfile()

    // parse user media
    this.initUserMedia()

    // generate user id (platform + username)
    this.id = `${this.platform}/${this.raw.profile.username}`

    // when you import users from directory/zip,
    // you may want to save the profile immediately
    if (this.origin === "storage") {
      this.media.fetch()

      await this.storage.save()
    }

    // set user as ready
    this.ready.value = true

    return this
  }

  /**
   * Initialize user storage
   */
  public async initUserStorage() {
    this.storage = new UserStorage(this)

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
  public async initUserProfile() {}
  public initUserMedia() {}

  /**
   * Check if user has changes
   */
  get hasLocalChanges() {
    return this.status.changed
  }

  /**
   * Update changed status
   *
   * @param value
   */
  public setChanged(value: boolean) {
    this.status.changed = value
  }

  /**
   * Is user removable?
   */
  get isRemovable() {
    return this.origin !== "config"
  }

  /**
   * Get user route
   */
  get route() {
    const config = useConfig()

    return {
      name: "user",
      params: {
        platform:
          config.platform.default === this.platform ? undefined : this.platform,
        // todo improve and find a standard for usernames
        username: extractUsernameFromUserId(this.id),
      },
    }
  }

  /**
   * Prepare user data for export
   */
  public async getDataForExport(): Promise<IUserExported> {
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
      useUserStorageStore().removeUserFromStorageIndex(this.id)
      await this.storage.remove()

      useUserStore().unloadUser(this.id)
    }
  }

  /**
   * Reset user which has changes but its config is hard-coded
   */
  public async reset() {
    if (!this.isRemovable || this.hasLocalChanges) {
      const originalUserId = this.id

      useUserStorageStore().removeUserFromStorageIndex(this.id)
      await this.storage.remove()

      // original raw user config is not reachable from here (refactor needed) todo
      location.reload()
    }
  }
}
