import User from "../user/user.class"
import InstagramUserProfile from "./instagramUserProfile.class"
import InstagramUserMedia from "./instagramUserMedia.class"

export default class InstagramUser extends User implements IInstagramUser {
  public readonly platform: IPlatforms = "instagram"
  public id: string = ""

  public profile: IInstagramUserProfile = {} as IInstagramUserProfile
  public media: IInstagramUserMedia = {} as IInstagramUserMedia

  constructor(raw: IRawUser, origin: string) {
    super(raw, origin)
  }

  public async initUserProfile() {
    this.profile = new InstagramUserProfile(this)

    await this.profile.import()
  }

  public initUserMedia() {
    this.media = new InstagramUserMedia(this)
  }
}
