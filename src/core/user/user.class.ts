import MediaAvatar from "../media/mediaAvatar.class";
import MediaPost from "../media/mediaPost.class";

export default class User {
    private readonly config: IRawUser
    private user: IUser

    constructor(config: IRawUser) {
        this.config = config

        this.user = this.parseUser()
    }

    get profile() {
        return this.user.profile
    }

    get options() {
        return this.user.options
    }

    private parseUser(): IUser {
        const data: IUser = {
            profile: {},
            options: {}
        } as IUser;

        data.profile = this.parseUserProfileDetails()
        data.profile.media = this.parseUserProfileMedia();

        return data
    }

    private parseUserProfileDetails(): IProfile {
        const profile: IProfile = {} as IProfile

        // parse basic info
        profile.name = this.config.profile.name;
        profile.username = this.config.profile.username;
        profile.verified = Boolean(this.config.profile.verified);

        profile.posts_count = 0;
        profile.followers_count = Number(this.config.profile.followers_count);
        profile.follows_count = Number(this.config.profile.follows_count);

        profile.website = !this.config.profile.website
            ? null
            : {
                href: this.config.profile.website,
                label: new URL(this.config.profile.website).hostname,
            };

        // parse biography
        if (this.config.profile.biography) {
            profile.biography = this.config.profile.biography?.replace(
                /(?:\r\n|\r|\n)/g,
                "<br>",
            );
        }

        // parse avatar
        profile.avatar = new MediaAvatar(this.config, this.config.profile.avatar);

        // public profile
        profile.publicProfile = `https://instagram.com/${this.config.profile.username}`

        return profile
    }

    private parseUserProfileMedia(): IProfileMedia {
        const media = {
            posts: [],
            stories: [],
            reels: [],
            highlights: [],
        }

        if (!Object.prototype.hasOwnProperty.call(this.config.profile, "media")) {
            return media
        }

        // parse media posts
        if (this.config.profile.media.posts) {
            media.posts = this.parseUserProfileMediaPosts();
        }

        // parse media reels
        if (this.config.profile.media.reels) {
            media.reels = this.parseUserProfileMediaReels()
        }

        return media
    }

    private parseUserProfileMediaPosts() {
        const parsedPosts: any = [];

        for (let configMediaPost of this.config.profile.media.posts) {
            const media = new MediaPost(this.config, configMediaPost)

            parsedPosts.push(media)
        }

        return parsedPosts;
    }

    private parseUserProfileMediaReels() {
        const parsedReels: any = [];

        for (let mediaPost of this.config.profile.media.posts) {
            if (!mediaPost.reel) continue

            const media = new MediaPost(this.config, mediaPost)

            parsedReels.push(media)
        }

        for (let mediaReel of this.config.profile.media.reels) {
            const media = new MediaPost(this.config, mediaReel)

            parsedReels.push(media)
        }

        return parsedReels;
    }
}