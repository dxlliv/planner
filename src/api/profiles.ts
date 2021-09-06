import profiles from `~/../config/profiles.json`

export function getProfiles() {
    return Object.keys(profiles).map(code => {
        return {
            username: profiles[code].details.username,
            url: code,
            avatar: getProfileAvatar(code, profiles[code])
        }
    })
}

export async function loadProfile(url: string) {
    if (Object.prototype.hasOwnProperty.call(profiles, url)) {
        const profile = profiles[url]

        // set right avatar path
       profile.details.avatar = getProfileAvatar(url, profile)

        // add <br> to description
        profile.details.description = profile.details.description.replace(/(?:\r\n|\r|\n)/g, '<br>')

        if (!profile.details.stats) {
            profile.details.stats = {
                posts: 0,
                followers: 0,
                following: 0
            }
        }

        if (profile.media) {
            profile.details.stats.posts = profile.media.length

            for(let i = 0; i < profile.media.length; i++) {
                switch (typeof profile.media[i]) {
                    case "string":
                        profile.media[i] = {
                            type: "image",
                            path: `../config/profiles/${url}/media/${profile.media[i]}`
                        }
                        break;
                    case "object":
                        if (profile.media[i].name) {
                            profile.media[i].path = `../config/profiles/${url}/media/${profile.media[i].name}`
                        }
                        break;
                }
            }

        } else {
            profile.details.stats.posts = 0
            profile.media = []
        }

        return profile
    }

    throw Error("Profile not found")
}

function getProfileAvatar(url: string, profile: any) {
    if (!profile.details.username.avatar) {
        return `../config/profiles/${url}/avatar.jpg`
    } else {
        return `../config/profiles/${url}/${profile.details.avatar}`
    }
}