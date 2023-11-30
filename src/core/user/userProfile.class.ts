import {removeUndefinedFromObject} from "../../utils/utilsObject";
import User from "../user/user.class";
import UserAvatar from "../user/userAvatar.class";

export default class UserProfile {
    private readonly user: User

    public name: string = ''
    public username: string = ''
    public website: IUserProfileWebsite = null
    public verified: boolean = false
    public biography: string = ''
    public avatar: UserAvatar | undefined
    public followers_count: number = 0
    public follows_count: number = 0
    public posts_count: number = 0

    constructor(user: User) {
        this.user = user

        this.import(this.user.raw.profile)
    }

    get public_profile() {
        return `https://instagram.com/${this.username}`
    }

    public setName(name: string) {
        this.name = name
    }

    public setUsername(username: string) {
        this.username = username;
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
        this.website = !website
            ? null
            : {
                href: website,
                label: new URL(website).hostname,
            };
    }

    public setAvatar(avatar: UserAvatar) {
        this.avatar = avatar
    }

    public import(rawProfile: IRawUserProfile) {
        if (rawProfile.name) {
            this.setName(rawProfile.name)
        }

        if (rawProfile.username) {
            this.setUsername(rawProfile.username)
        }

        if (rawProfile.biography) {
            this.setBiography(rawProfile.biography)
        }

        if (rawProfile.verified) {
            this.setVerified(rawProfile.verified)
        }

        if (rawProfile.followers_count) {
            this.setFollowersCount(rawProfile.followers_count)
        }

        if (rawProfile.follows_count) {
            this.setFollowsCount(rawProfile.follows_count)
        }

        if (rawProfile.website) {
            this.setWebsite(rawProfile.website)
        }

        if (rawProfile.avatar) {
            const avatar = new UserAvatar(rawProfile.avatar, this.username)

            this.setAvatar(avatar)
        }
    }

    public async export(): Promise<IRawUserProfile> {
        return removeUndefinedFromObject({
            name: this.name,
            username: this.username,
            verified: this.verified,
            followers_count: this.followers_count,
            follows_count: this.follows_count,
            website: this.website?.href,
            biography: this.biography,
            avatar: await this.avatar?.file
        })
    }
}