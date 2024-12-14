import UserMedia from "../../user/userMedia.class"
import { usePlatformStructure } from "£/composables/composablePlatformStructure"

export default class InstagramUserMedia extends UserMedia {
  public structure: IPlatformStructureUserMedia

  constructor(user: IUser) {
    super(user)

    this.structure = {
      ...usePlatformStructure(this.user.platform).user.media
    }
  }
}
