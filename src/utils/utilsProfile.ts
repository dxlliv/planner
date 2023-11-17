export function parseProfile(config: IConfigUser): IUser {
  const data: IUser = {
    profile: {},
  } as IUser;

  // set fields
  data.profile.name = config.profile.name;
  data.profile.username = config.profile.username;
  data.profile.verified = Boolean(config.profile.verified);

  data.profile.posts_count = 0;
  data.profile.followers_count = Number(config.profile.followers_count);
  data.profile.follows_count = Number(config.profile.follows_count);

  data.profile.website = !config.profile.website
    ? null
    : {
        href: config.profile.website,
        label: new URL(config.profile.website).hostname,
      };

  // parse fields biography
  if (config.profile.biography) {
    data.profile.biography = config.profile.biography?.replace(
      /(?:\r\n|\r|\n)/g,
      "<br>",
    );
  }

  // set parsed avatar
  data.profile.avatar = getProfileAvatar(config);

  // set empty media
  data.profile.media = {
    posts: [],
    stories: [],
    reels: [],
    highlights: [],
  };

  // check for media property
  if (Object.prototype.hasOwnProperty.call(config.profile, "media")) {
    // parse media posts
    if (config.profile.media.posts) {
      data.profile.media.posts = parseMediaPosts(config);
    }

    // parse media reels
    if (config.profile.media.reels) {
      data.profile.media.reels = parseMediaReels(config)
    }
  }

  return data;
}

export function getProfileAvatar(config: IConfigUser): IMediaFile {
  let avatarFilename = "avatar.jpg";
  let path = "";

  if (config.profile.avatar) {
    avatarFilename = config.profile.avatar;
  }

  if (avatarFilename.startsWith("http")) {
    path = avatarFilename;
  } else {
    path = `users/${config.profile.username}/${avatarFilename}`;
  }

  return {
    filename: avatarFilename,
    path,
  };
}