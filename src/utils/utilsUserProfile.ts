import MediaAvatar from "../core/media/mediaAvatar.class";
import {removeUndefinedFromObject} from "./utilsObject";

export function parseUserProfile(rawUser: IRawUser): IUserProfile {
    const profile: IUserProfile = {} as IUserProfile

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
    profile.biography = rawUser.profile.biography;

    // parse avatar
    profile.avatar = new MediaAvatar(rawUser, rawUser.profile.avatar);

    // public profile
    profile.publicProfile = `https://instagram.com/${rawUser.profile.username}`

    return profile
}

export function exportUserProfile(profile: IUserProfile): IRawUser {
    return removeUndefinedFromObject({
        name: profile.name,
        username: profile.username,
        verified: profile.verified,
        followers_count: profile.followers_count,
        follows_count: profile.follows_count,
        website: profile.website?.href,
        biography: profile.biography,
        avatar: profile.avatar
    })
}