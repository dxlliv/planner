import UserProfile from "../user/userProfile.class"
import { removeUndefinedFromObject } from "../../utils/utilsObject"
import { usePlatformStructure } from "../../composables/composablePlatformStructure";

export default class InstagramUserProfile
  extends UserProfile
  implements IInstagramUserProfile
{
  public user: IInstagramUser
  public structure: IPlatformStructureUserProfile

  constructor(user: IInstagramUser) {
    super(user)

    this.user = user
    this.structure = {
      fields: {
        ...usePlatformStructure(this.user.platform).user.profile.fields
      },
    }
  }

  get public_profile() {
    return `https://instagram.com/${this.user.profile.username}`
  }

  public async export(): Promise<IRawUserProfile> {
    let avatar = undefined

    if (this.avatar) {
      avatar = await this.avatar.export()
    }

    return removeUndefinedFromObject({
      username: this.username,
      name: this.name,
      verified: this.verified,
      followers_count: this.followers_count,
      follows_count: this.follows_count,
      website: this.website,
      biography: this.biography,
      avatar,
    })
  }
}
