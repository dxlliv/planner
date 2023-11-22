import MediaAvatar from "../core/media/mediaAvatar.class";

export function parseUserProfile(rawUser: IRawUser): IProfile {
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
    profile.biography = rawUser.profile.biography;

    // parse avatar
    profile.avatar = new MediaAvatar(rawUser, rawUser.profile.avatar);

    // public profile
    profile.publicProfile = `https://instagram.com/${rawUser.profile.username}`

    return profile
}

export function exportUserProfile() {

}