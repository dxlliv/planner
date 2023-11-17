export default class User {
    private readonly config: IConfigUser
    private user: IUser

    constructor(config: IConfigUser) {
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
        profile.avatar = this.parseUserProfileAvatar();

        return profile
    }

    private parseUserProfileAvatar(): IMediaFile {
        let avatarFilename = "avatar.jpg";
        let path = "";

        if (this.config.profile.avatar) {
            avatarFilename = this.config.profile.avatar;
        }

        if (avatarFilename.startsWith("http")) {
            path = avatarFilename;
        } else {
            path = `users/${this.config.profile.username}/${avatarFilename}`;
        }

        return {
            filename: avatarFilename,
            path,
        };
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
            media.posts = parseMediaPosts(this.config);
        }

        // parse media reels
        if (this.config.profile.media.reels) {
            media.reels = parseMediaReels(this.config)
        }

        return media
    }
}