import MediaAvatar from "../media/mediaAvatar.class";
import {removeUndefinedFromObject} from "../../utils/utilsObject";

export default class Profile {
    private readonly rawUser: IRawUser

    public name: string = ''
    public username: string = ''
    public website: IUserProfileWebsite = null
    public verified: boolean
    public biography: string = ''
    public avatar: IMediaAvatar
    public followers_count: string = ''
    public follows_count: string = ''

    constructor(rawUser: IRawUser) {
        this.rawUser = rawUser

        this.parseUserProfile()
    }

    get posts_count() {
        return this.rawUser.media.posts.length
    }

    get public_profile() {
        return `https://instagram.com/${this.rawUser.profile.username}`
    }

    private parseUserProfile(): IUserProfile {
        this.name = this.rawUser.profile.name;
        this.username = this.rawUser.profile.username;
        this.verified = Boolean(this.rawUser.profile.verified);

        this.followers_count = Number(this.rawUser.profile.followers_count);
        this.follows_count = Number(this.rawUser.profile.follows_count);

        this.website = !this.rawUser.profile.website
            ? null
            : {
                href: this.rawUser.profile.website,
                label: new URL(this.rawUser.profile.website).hostname,
            };

        // parse biography
        this.biography = this.rawUser.profile.biography;

        // parse avatar
        this.avatar = new MediaAvatar(this.rawUser, this.rawUser.profile.avatar);
    }

    public exportUserProfile(): IRawUser {
        return removeUndefinedFromObject({
            name: this.name,
            username: this.username,
            verified: this.verified,
            followers_count: this.followers_count,
            follows_count: this.follows_count,
            website: this.website?.href,
            biography: this.biography,
            avatar: this.avatar.data.file.blob
        })
    }
}