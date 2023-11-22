import MediaPost from "../core/media/mediaPost.class";

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