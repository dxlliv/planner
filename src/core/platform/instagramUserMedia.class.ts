import UserMedia from "../user/userMedia.class"

export default class InstagramUserMedia extends UserMedia {
  public user: IInstagramUser

  private structure = {
    collections: {
      posts: {},
      reels: {},
    },
  }

  constructor(user: IInstagramUser) {
    super(user)

    this.user = user
  }
}
