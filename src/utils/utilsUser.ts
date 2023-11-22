import MediaAvatar from "../core/media/mediaAvatar.class";
import MediaPost from "../core/media/mediaPost.class";

export function parseUserProfileDetails(rawUser: IRawUser): IProfile {
    const profile: IProfile = {} as IProfile

    // parse basic info
    profile.name = rawUser.profile.name;
    profile.username = rawUser.profile.username;
    profile.verified = Boolean(rawUser.profile.verified);

    profile.posts_count = 0;
    profile.followers_count = Number(rawUser.profile.followers_count);
    profile.follows_count = Number(rawUser.profile.follows_count);

    profile.website = !rawUser.profile.website
        ? null
        : {
            href: rawUser.profile.website,
            label: new URL(rawUser.profile.website).hostname,
        };

    // parse biography
    if (rawUser.profile.biography) {
        profile.biography = rawUser.profile.biography?.replace(
            /(?:\r\n|\r|\n)/g,
            "<br>",
        );
    }

    // parse avatar
    profile.avatar = new MediaAvatar(rawUser, rawUser.profile.avatar);

    // public profile
    profile.publicProfile = `https://instagram.com/${rawUser.profile.username}`

    return profile
}

export function parseUserProfileMedia(rawUser: IRawUser): IProfileMedia {
    const media = {
        posts: [],
        stories: [],
        reels: [],
        highlights: [],
    }

    if (!Object.prototype.hasOwnProperty.call(rawUser.profile, "media")) {
        return media
    }

    // parse media posts
    if (rawUser.profile.media.posts) {
        media.posts = parseUserProfileMediaPosts(rawUser);
    }

    // parse media reels
    if (rawUser.profile.media.reels) {
        media.reels = parseUserProfileMediaReels(rawUser)
    }

    return media
}

export function parseUserProfileMediaPosts(rawUser: IRawUser) {
    const parsedPosts: any = [];

    for (let configMediaPost of rawUser.profile.media.posts) {
        const media = new MediaPost(rawUser, configMediaPost)

        parsedPosts.push(media)
    }

    return parsedPosts;
}

export function parseUserProfileMediaReels(rawUser: IRawUser) {
    const parsedReels: any = [];

    for (let mediaPost of rawUser.profile.media.posts) {
        if (!mediaPost.reel) continue

        const media = new MediaPost(rawUser, mediaPost)

        parsedReels.push(media)
    }

    for (let mediaReel of rawUser.profile.media.reels) {
        const media = new MediaPost(rawUser, mediaReel)

        parsedReels.push(media)
    }

    return parsedReels;
}