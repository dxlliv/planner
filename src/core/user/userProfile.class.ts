import UserAvatar from "../user/userAvatar.class";

export default class UserProfile implements IUserProfile {
    public readonly user: IUser

    public username: string = ''
    public name: string = ''
    public website: string = ''
    public verified: boolean = false
    public biography: string = ''
    public avatar: UserAvatar | undefined
    public followers_count: number = 0
    public follows_count: number = 0
    public posts_count: number = 0

    constructor(user: IUser) {
        this.user = user
    }

    public setUsername(username: string) {
        this.username = username
    }

    public setName(name: string) {
        this.name = name
    }

    public setBiography(biography: string) {
        this.biography = biography;
    }

    public async updateBiography(biography: string) {
        this.setBiography(biography)
        await this.user.save()
    }

    public setVerified(verified: boolean) {
        this.verified = Boolean(verified);
    }

    public setPostsCount(count: number) {
        this.posts_count = Number(count);
    }

    public setFollowersCount(count: number) {
        this.followers_count = Number(count);
    }

    public setFollowsCount(count: number) {
        this.follows_count = Number(count);
    }

    public setWebsite(website: any) {
        this.website = website;
    }

    public async setAvatar(avatar: string | File) {
        if (avatar) {
            this.avatar = new UserAvatar(this.user)
        }
    }

    public async updateAvatar(avatar: File) {
        await this.setAvatar(avatar)
        await this.user.save()
    }

    public import() {
        this.update(this.user.raw.profile)
    }

    public update(data: any) {
        for (const [fieldKey, field] of Object.entries(this.structure.fields)) {
            if (!field.methods || !field.methods.set) continue

            // @ts-ignore
            this[field.methods.set](data[fieldKey])
        }
    }
}