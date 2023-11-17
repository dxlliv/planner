export function getProfileMediaImage(
    config: IConfigUser,
    filename: string,
): IMediaFile {
    return {
        filename,
        path: getMediaPath(config, filename),
    };
}
function getFileExtension(filename: string) {
    return filename.split('.').pop()
}

export function getMediaPath(config: IConfigUser, filename: string) {
    if (filename.startsWith("http")) {
        return "";
    }

    return `users/${config.profile.username}/media/${filename}`;
}

export function parseProfileMedia(
    config: IConfigUser,
    media: IConfigUserProfileMedia
) {
    let parsedMedia = null

    let mediaAlbum: IMediaAlbumList = []
    let mediaVideoCover = null

    switch (typeof media) {

        // is it a short import?
        case "string":

            switch(getFileExtension(media)) {

                case 'mp4':
                    parsedMedia = {
                        file: getProfileMediaVideo(config, media),
                        type: "video",
                        cover: 0
                    }
                    break;

                default:
                    parsedMedia = {
                        file: getProfileMediaImage(config, media),
                        type: "image",
                    }
                    break;

            }

            break;

        // is it a regular import?
        case "object":

            switch (media.type) {

                case "image":
                    parsedMedia = {
                        file: getProfileMediaImage(config, media.name),
                        type: "image",
                    }
                    break;

                case "album":
                    if (media.list && Array.isArray(media.list)) {
                        for (let albumMediaPost of media.list) {
                            mediaAlbum.push(
                                parseProfileMedia(config, albumMediaPost)
                            )
                        }
                    }

                    parsedMedia = {
                        list: mediaAlbum,
                        type: "album",
                    }
                    break;

                case "video":
                    // parse video cover
                    if (media.cover) {
                        switch(typeof media.cover) {
                            case "string":
                                mediaVideoCover = {
                                    file: getProfileMediaImage(config, media.cover),
                                    type: "image",
                                }
                                break;
                            case "number":
                                mediaVideoCover = media.cover
                                break;
                        }
                    }

                    parsedMedia = {
                        file: getProfileMediaVideo(config, media.name),
                        type: "video",
                        cover: mediaVideoCover
                    }
                    break;

                case "iframe":
                    parsedMedia = {
                        href: getProfileMediaIframe(config, media.href),
                        type: "iframe",
                    }
                    break;

            }
            break;
    }

    return parsedMedia
}

export function parseMediaPosts(config: IConfigUser) {
    const parsedPosts: any = [];

    for (let mediaPost of config.profile.media.posts) {
        parsedPosts.push(
            parseProfileMedia(config, mediaPost)
        )
    }

    return parsedPosts;
}

export function parseMediaReels(config: IConfigUser) {
    const parsedReels: any = [];

    for (let mediaPost of config.profile.media.posts) {
        if (!mediaPost.reel) continue

        parsedReels.push(
            parseProfileMedia(config, mediaPost)
        )
    }

    for (let mediaReel of config.profile.media.reels) {
        parsedReels.push(
            parseProfileMedia(config, mediaReel)
        )
    }

    return parsedReels;
}

export function getProfileMediaVideo(
    config: IConfigUser,
    filename: string,
): IMediaFile {
    return {
        filename,
        path: getMediaPath(config, filename),
    };
}


export function getProfileMediaIframe(
    config: IConfigUser,
    href: string,
): string {
    return href;
}