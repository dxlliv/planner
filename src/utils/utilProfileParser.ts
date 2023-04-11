export function parseProfile(data: IProfile): IProfileLoaded {
    const profileLoaded: IProfileLoaded = {} as IProfileLoaded

    // set parsed avatar
    profileLoaded.avatar = getProfileAvatar(data)

    // set fields
    profileLoaded.fields = data.fields

    // parse fields biography
    if (profileLoaded.fields.biography) {
        profileLoaded.fields.biography = profileLoaded.fields.biography.replace(/(?:\r\n|\r|\n)/g, "<br>")
    }

    // set empty counters
    profileLoaded.counters = {
        posts: 0,
        stories: 0,
        reels: 0,
        highlights: 0
    }

    // set empty media
    profileLoaded.media = {
        posts: [],
        stories: [],
        reels: [],
        highlights: []
    }

    if (!data.media) {
        data.media = {
            posts: [],
            stories: [],
            reels: [],
            highlights: []
        }
    }

    // parse media posts
    if (data.media.posts.length > 0) {
        const mediaPosts: IProfileMediaPosts = []

        // define variable for media albums
        let mediaAlbum: IProfileMediaPosts = []

        for (let i = 0; i < data.media.posts.length; i++) {
            const mediaPost: string | IProfileMedia = data.media.posts[i]

            switch (typeof mediaPost) {
                case "string":
                    profileLoaded.counters.posts++
                    mediaPosts.push({
                        type: "image",
                        path: getProfileMedia(data, mediaPost)
                    })
                    break
                case "object":
                    switch (mediaPost.type) {
                        case "album":
                            profileLoaded.counters.posts++

                            // reset array
                            mediaAlbum = []

                            // parse albums
                            if (Array.isArray(mediaPost.album)) {
                                for (let m = 0; m < mediaPost.album.length; m++) {
                                    mediaAlbum.push({
                                        type: mediaPost.album[m].type,
                                        path: getProfileMedia(data, mediaPost.album[m])
                                    })
                                }
                            }

                            mediaPosts.push({
                                type: "album",
                                album: mediaAlbum
                            })
                            break
                        case "video":
                            profileLoaded.counters.posts++

                            mediaPosts.push({
                                type: "video",
                                path: getProfileMedia(data, data.media[i].name)
                            })
                            break
                    }

                    break
            }
        }

        profileLoaded.media.posts = mediaPosts
    }

    return profileLoaded
}

export function getProfileAvatar(profile: IProfile): IProfileMediaFile {
    let avatarFilename = 'avatar.jpg'

    if (profile.fields.avatar !== '') {
        avatarFilename = profile.fields.avatar
    }

    return {
        filename: avatarFilename,
        path: `profiles/${profile.fields.username}/${avatarFilename}`
    }
}

export function getProfileMedia(profile: IProfile, filename: string): IProfileMediaFile {
    return {
        filename,
        path: `profiles/${profile.fields.username}/media/${filename}`
    }
}