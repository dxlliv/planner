import MediaAvatar from "../media/mediaAvatar.class";
import MediaPost from "../media/mediaPost.class";

export default class User {
    private readonly raw: IRawUser

    public order: number = 0
    public options: IUserOptions = {}
    public profile: IUserProfile = {}

    constructor(rawUser: IRawUser) {
        this.raw = rawUser

        this.parseUser()
    }

    private parseUser(): IUser {
        const data: IUser = {
            profile: {},
            options: {}
        } as IUser;

        this.profile = this.parseUserProfileDetails()
        this.profile.media = this.parseUserProfileMedia();
        this.options = this.raw.options

        return data
    }

    private parseUserProfileDetails(): IProfile {
        const profile: IProfile = {} as IProfile

        // parse basic info
        profile.name = this.raw.profile.name;
        profile.username = this.raw.profile.username;
        profile.verified = Boolean(this.raw.profile.verified);

        profile.posts_count = 0;
        profile.followers_count = Number(this.raw.profile.followers_count);
        profile.follows_count = Number(this.raw.profile.follows_count);

        profile.website = !this.raw.profile.website
            ? null
            : {
                href: this.raw.profile.website,
                label: new URL(this.raw.profile.website).hostname,
            };

        // parse biography
        if (this.raw.profile.biography) {
            profile.biography = this.raw.profile.biography?.replace(
                /(?:\r\n|\r|\n)/g,
                "<br>",
            );
        }

        // parse avatar
        profile.avatar = new MediaAvatar(this.raw, this.raw.profile.avatar);

        // public profile
        profile.publicProfile = `https://instagram.com/${this.raw.profile.username}`

        return profile
    }

    private parseUserProfileMedia(): IProfileMedia {
        const media = {
            posts: [],
            stories: [],
            reels: [],
            highlights: [],
        }

        if (!Object.prototype.hasOwnProperty.call(this.raw.profile, "media")) {
            return media
        }

        // parse media posts
        if (this.raw.profile.media.posts) {
            media.posts = this.parseUserProfileMediaPosts();
        }

        // parse media reels
        if (this.raw.profile.media.reels) {
            media.reels = this.parseUserProfileMediaReels()
        }

        return media
    }

    private parseUserProfileMediaPosts() {
        const parsedPosts: any = [];

        for (let configMediaPost of this.raw.profile.media.posts) {
            const media = new MediaPost(this.raw, configMediaPost)

            parsedPosts.push(media)
        }

        return parsedPosts;
    }

    private parseUserProfileMediaReels() {
        const parsedReels: any = [];

        for (let mediaPost of this.raw.profile.media.posts) {
            if (!mediaPost.reel) continue

            const media = new MediaPost(this.raw, mediaPost)

            parsedReels.push(media)
        }

        for (let mediaReel of this.raw.profile.media.reels) {
            const media = new MediaPost(this.raw, mediaReel)

            parsedReels.push(media)
        }

        return parsedReels;
    }
}