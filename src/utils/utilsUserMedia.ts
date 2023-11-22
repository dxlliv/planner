import MediaPost from "../core/media/mediaPost.class";

export function parseUserMedia(rawUser: IRawUser): IUserMedia {
    const media = {
        posts: [],
        stories: [],
        reels: [],
        highlights: [],
    }

    // parse media posts
    if (rawUser.media.posts) {
        media.posts = parseUserMediaPosts(rawUser);
    }

    // parse media reels
    if (rawUser.media.reels) {
        media.reels = parseUserMediaReels(rawUser)
    }

    return media
}

export function parseUserMediaPosts(rawUser: IRawUser) {
    const parsedPosts: any = [];

    for (let configMediaPost of rawUser.media.posts) {
        const media = new MediaPost(rawUser, configMediaPost)

        parsedPosts.push(media)
    }

    return parsedPosts;
}

export function parseUserMediaReels(rawUser: IRawUser) {
    const parsedReels: any = [];

    for (let mediaPost of rawUser.media.posts) {
        if (!mediaPost.reel) continue

        const media = new MediaPost(rawUser, mediaPost)

        parsedReels.push(media)
    }

    for (let mediaReel of rawUser.media.reels) {
        const media = new MediaPost(rawUser, mediaReel)

        parsedReels.push(media)
    }

    return parsedReels;
}

export function exportUserMedia(media: IUserMedia): IRawUserMedia {
    return {
        posts: media.posts.map(m => m.exportMedia()),
        reels: media.reels.map(m => m.exportMedia()),
        stories: media.stories.map(m => m.exportMedia()),
        highlights: media.highlights.map(m => m.exportMedia()),
    }
}