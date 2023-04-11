# Getting started

## Installation

Be sure you have [Node.js](https://nodejs.org) and NPM installed.   
Clone the repository and move to the project directory:

```bash
git clone https://github.com/dxlliv/ig-planner.git && cd ig-planner
```

Install dependencies and run the project with `yarn` or `npm`:

```bash
npm install && npm run dev

# or use yarn
yarn install && yarn dev
```

## Configuration

You can find profiles configuration in `config/profiles.json`.

```json
[
  {
    "fields": {
      "username": "dxlliv",
      "biography": "Developer of Things.",
      "avatar": "avatar.jpg",
      "website": "",
      "followers_count": 50,
      "follows_count": 50
    },
    "media": {
      "posts": ["3.jpg", "2.jpg", "1.jpg"],
      "reels": [],
      "stories": [],
      "highlights": []
    }
  }
]
```

### Set up a new profile

Define your profiles under the `config/profiles.json` configuration file  
and create a folder for each profile in `public/profiles/{username}`.

Place an image called `avatar.jpg` in your profile folder.

### Add some media

Instagram Planner supports different [media types](media): images, videos, albums and reels.

Just add your files in the profile media folder in `public/profiles/{username}/media/`,  
then define all your media in the profile configuration like the example above.

## Keyboard shortcuts

Press **D** to toggle dark theme.
Press **R** to show some rulers.  
