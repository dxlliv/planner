import profiles from `~/../config/profiles.json`

export function getProfiles() {
    return Object.keys(profiles).map(id => {
        return {
            username: profiles[id]?.details?.username ? profiles[id].details.username : id,
            url: id,
            avatar: getProfileAvatar(id, profiles[id])
        }
    })
}

export async function loadProfile(id: string) {
    if (Object.prototype.hasOwnProperty.call(profiles, id)) {
        const profile = profiles[id]

        // missing profile details?
        // set username as the user id
        if (!profile.details) {
            profile.details = { username: id }
        }

        // resolve avatar path
        profile.details.avatar = getProfileAvatar(id, profile)

        // add <br> to description
        if (profile.details.description) {
            profile.details.description = profile.details.description.replace(/(?:\r\n|\r|\n)/g, '<br>')
        }

        // missing profile stats?
        if (!profile.details.stats) {
            profile.details.stats = {
                followers: 0,
                following: 0
            }
        }

        // reset profile posts stats
        profile.details.stats.posts = {
            total: 0,
            reels: 0,
            posts: 0
        }

        // parse profile media
        if (profile.media) {
            profile.details.stats.posts.total = profile.media.length

            for(let i = 0; i < profile.media.length; i++) {
                switch (typeof profile.media[i]) {
                    case "string":
                        profile.details.stats.posts.posts++
                        profile.media[i] = {
                            type: "image",
                            path: getMediaPath(id, profile.media[i])
                        }
                        break;
                    case "object":

                        switch(profile.media[i].type) {
                            case "album":
                                profile.details.stats.posts.posts++
                                if (Array.isArray(profile.media[i].list)) {
                                    for (let m = 0; m < profile.media[i].list.length; m++) {
                                        profile.media[i].list[m] = getMediaPath(id, profile.media[i].list[m])
                                    }
                                }
                                break;
                            case "video":
                                profile.details.stats.posts.posts++
                                if (profile.media[i].name) {
                                    profile.media[i].path = getMediaPath(id, profile.media[i].name)
                                }
                                break;
                            case "reel":
                                profile.details.stats.posts.reels++
                                if (profile.media[i].name) {
                                    profile.media[i].path = getMediaPath(id, profile.media[i].name)
                                }
                                break;
                        }

                        break;
                }
            }

        } else {
            profile.media = []
        }

        return profile
    }

    throw Error("Profile not found")
}

function getProfileAvatar(id: string, profile: any) {
    if (!profile?.details?.username?.avatar) {
        return `profiles/${id}/avatar.jpg`
    } else {
        return `profiles/${id}/${profile.details.avatar}`
    }
}

function getMediaPath(id: string, filename: string) {
    return `profiles/${id}/media/${filename}`
}