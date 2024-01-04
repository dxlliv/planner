# Getting Started

## Try it online

You can try **dxlliv/planner** directly in your browser on the [GitHub Demo](https://dxlliv.github.io/planner/).  
If you prefer to run your planner locally or host it somewhere, keep reading. 

## Installation

Make sure you have [Node.js](https://nodejs.org/en/download) and NPM installed.  
Clone the repository and move to the project directory:

```bash
git clone https://github.com/dxlliv/planner.git && cd planner
```

Install dependencies and run the project:

```bash
npm install && npm run dev

# or use yarn
yarn install && yarn dev
```

## File structure

You can add users directly from the browser, but if you want to host an instance of the planner somewhere and would like to show some users as soon as you open the planner, you will need to edit the main configuration file and the public folder of each user.

```
.
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
├─ src
├─ config.json
└─ package.json
```

The files you have to modify are the `config.json`. The main configuration is located in the root folder and contains a list of profile paths. Other configurations live in the public folder and are related to each profile, like `public/user/instagram/dxlliv/config.json`.

## Configuration

Define your profile using your favorite editor and create a `config.json` file.

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

## Set up a new user

After creating the profile configuration, create the user folder in `public/user/instagram/`
and place the `config.json` you just prepared, making sure to provide a valid JSON.

::: tip NOTE

The username you put in the configuration must be the same of the folder name.

:::

### Define your profile in the main config

Add your new profile path in the root `config.json` like the example.

```json
{
  "users": [
    "instagram/dxlliv",
    "instagram/dxvfpv",
    "instagram/{username}"
  ]
}
```

## Define your media

This planner supports different media types: images, videos, albums and iframes.

Place your media in `public/user/instagram/{username}/media/` and define the content in the user configuration. Create a `media` folder in your profile, if you are setting a new user.