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
    // parse user profile from raw config
    await this.initUserProfile()

    // parse user media
    this.initUserMedia()

    // set user id (provided, or getted from profile username)
    this.id = this.raw.id ?? this.raw.profile.username

    // set user as ready
    this.ready.value = true

    return this
  }

  public async prepareClient() {
    // start user indexed db
    await this.initUserStorage()

    // check for index db user changes
    await this.storage.isContentAvailable().then(async (availability) => {
      if (availability) {
        // override raw user data
        await this.storage.restore()
      }
    })
  }

  /**
   * Initialize user storage
   */
  public async initUserStorage() {
    this.storage = new UserStorage(this)

    await this.storage.init()
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
    const plannerConfig = usePlannerConfig()

    /*
    {
      name: "user",
      params: {
        platform: plannerConfig.platform.default === this.platform ? undefined : this.platform,
        // todo improve and find a standard for usernames
        username: extractUsernameFromUserId(this.id),
      },
    }
     */
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
