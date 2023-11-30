# Getting started

## Configuration

Define your profile using your favorite editor and create a `config.json` file.  

```json
{
  "username": "dxlliv",
  "profile": {
    "fields": {
      "avatar": "avatar.jpg",
      "biography": "",
      "website": "",
      "followers_count": 50,
      "follows_count": 50
    }
  },
  "media": {
    "posts": ["3.jpg", "2.jpg", "1.jpg"],
    "reels": [],
    "stories": [],
    "highlights": []
  }
}
```

## Set up a new user

After creating the profile configuration, create a new folder in `public/user/{username}`
and place the `config.json` you just created, making sure to provide a valid JSON.

If you have not defined a direct link, place an image called `avatar.jpg` in your folder.

::: tip NOTE

The username you put in the configuration must be the same as the folder name.

:::

### Define it in the main config

Add your new profile path in the root `config.json` like the example.

```json
{
  "users": [
    "user/dxlliv",
    "user/dxvfpv",
    "user/{username}"
  ]
}
```

## Define your media

This planner supports different media types: images, videos, albums and iframes.

Place your media in the `public/user/{username}/media/` and define your content in the user configuration. Create a `media` folder in your profile, if you are setting a new user.
