import User from "../../user/user.class"
import InstagramUserProfile from "./instagramUserProfile.class"
import InstagramUserMedia from "./instagramUserMedia.class"

export default class InstagramUser extends User implements IInstagramUser {
  public readonly platform: IUserPlatform = "instagram"
  public id: string = ""

  public profile: IInstagramUserProfile = {} as IInstagramUserProfile
  public media: IInstagramUserMedia = {} as IInstagramUserMedia

  constructor(raw: IRawUser) {
    super(raw)
  }

  public async loadUserProfile() {
    this.profile = new InstagramUserProfile(this)

    this.profile.importRawUserProfileConfig()
  }

  public loadUserMedia() {
    this.media = new InstagramUserMedia(this)

    this.media.importRawUserMediaConfig('client')
  }
}
