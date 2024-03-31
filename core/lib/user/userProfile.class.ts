import UserAvatar from "../user/userAvatar.class"

export default class UserProfile implements IUserProfile {
  public readonly user: IUser

  public structure: any

  public username: string = ""
  public name: string = ""
  public website: string = ""
  public verified: boolean = false
  public biography: string = ""
  public avatar: UserAvatar | undefined
  public followers_count: number = 0
  public follows_count: number = 0
  public posts_count: number = 0

  constructor(user: IUser) {
    this.user = user
  }

  public get seoMeta() {
    return {
      title: `${this.username} - ${capitalizeFirstLetter(this.user.platform)} Planner`
    }
  }

  public setUsername(username: string) {
    username = slugify(username, "_")

    this.username = username
  }

  public async updateUsername(username: string) {
    this.setUsername(username)
  }

  public setName(name: string) {
    this.name = name
  }

  public async updateName(name: string) {
    this.setName(name)
  }

  public setBiography(biography: string) {
    this.biography = biography
  }

  public async updateBiography(biography: string) {
    this.setBiography(biography)
  }

  public setVerified(verified: boolean) {
    this.verified = Boolean(verified)
  }

  public setPostsCount(count: number) {
    this.posts_count = Number(count)
  }

  public setFollowersCount(count: number) {
    this.followers_count = Number(count)
  }

  public setFollowsCount(count: number) {
    this.follows_count = Number(count)
  }

  public setWebsite(website: any) {
    this.website = website
  }

  public async setAvatar(avatar: string | File) {
    if (avatar) {
      this.avatar = new UserAvatar(this.user, avatar)
    }
  }

  public async updateAvatar(avatar: File) {
    await this.setAvatar(avatar)
  }

  public async update(data: any) {
    for (const [fieldKey, field] of Object.entries(this.structure.fields)) {
      // @ts-ignore
      if (!field.methods || !field.methods.set) continue

      // @ts-ignore
      await this[field.methods.set](data[fieldKey])
    }
  }

  public async import() {
    await this.update(this.user.raw.profile)
  }

  public async export() {
    return {
      username: this.username,
      name: this.name,
      website: this.website,
      verified: this.verified,
      biography: this.biography,
      avatar: this.avatar?.export(),
      followers_count: this.followers_count,
      follows_count: this.follows_count,
    }
  }
}
