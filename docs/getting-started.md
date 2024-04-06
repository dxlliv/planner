# Getting Started

Whether you're obsessed with perfection, passionate about aesthetics, or simply love curating your feed,
this is the perfect tool that supports your Instagram strategy on the fly.

### Try it online

You can try **dxlliv/planner** directly in your browser using the [GitHub Demo](https://dxlliv.github.io/planner/).  
If you prefer to run your planner locally or host it somewhere, keep reading. 

## Create your planner

First of all, make sure you have [Node.js](https://nodejs.org/en/download) and Yarn installed on your system.  
You can bootstrap a new planner by running the following command:

```bash
npx create-plxnner planner
```

Enter the project directory and start your planner:

```bash
cd planner
yarn dev
```

## Project structure

If you want to host your instance somewhere and wish to show your profiles upon opening the planner, you have to edit each user configuration or add them through the UI and then export and extract the zip file in the `/public/user/instagram/{username}` directory.
```
.
├─ pages
├─ public
│  └─ user
│     └─ instagram
│        └─ {username}
│           ├─ media
│           │  ├─ 1.jpg
│           │  ├─ 2.jpg
│           │  └─ 3.jpg
│           ├─ avatar.jpg
│           └─ config.json
├─ nuxt.config.ts
├─ planner.config.ts
└─ package.json
```

In the `planner.config.ts` file you can find the list of enabled profiles which will be loaded once the planner starts, so adjust the configuration accordingly adding your profile.

## Set up a new user

Create your profile `config.json` using your favorite editor.

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

After creating the profile configuration, make a new folder in `/public/user/instagram`
and place the `config.json` you just prepared, making sure to provide a valid JSON.

::: tip NOTE

The username you put in the configuration must be the same of the folder name.

:::

### Define your profile

Add your profile in the `planner.config.ts` like the example.

```json
{
  "users": [
    "instagram/dxlliv",
    "instagram/dxvfpv",
    "instagram/{username}"
  ]
}
```

### Provide some media

The planner supports different media types: images, videos, albums and iframes.

Place your media in `/public/user/instagram/{username}/media` and define it in your configuration [like the example](media-image). Create the `media` folder, if you are setting a new user.