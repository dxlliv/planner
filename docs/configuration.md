# Configuration

## Profile configuration

This is an example of profile configuration.

```json
{
  "profile": {
    "fields": {
      "username": "dxlliv",
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

It's placed under `/public/user/instagram/dxlliv` and contains all the basic information,
along with the media that you can find in `/public/user/instagram/dxlliv/media`.

## Planner configuration

```ts
export default {
  users: [
    "instagram/dxlliv"
  ],
  platform: {
    default: "instagram"
  },
  locale: "en",
  features: {
    // profile options
    profileEditor: true,

    // media options
    mediaSort: true,
    mediaEditor: true,
    mediaPage: true,

    // deluxe edition
    requestDeluxe: true
  }
}
```

##### users
This property contains a list of enabled profiles.

##### platform
For now the only supported platform is Instagram.

##### locale
You can set another language, but only a few are supported.

##### features
From here you can choose which features to keep enabled.