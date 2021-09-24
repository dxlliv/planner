# Getting started

## Installation

Be sure you have Node.js and NPM installed.  
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
{
  "dxlliv": {
    "details":  {
      "name": "",
      "username": "dxlliv",
      "description": "Developer of things",
      "avatar": "avatar.jpg",
      "stats": {
        "followers": 50,
        "following": 50
      }
    },
    "media": [
      "3.jpg",
      "2.jpg",
      "1.jpg"
    ]
  }
}
```

### Set up a new profile

Define in the profiles configuration a new profile `id` (it can be your username) and use the object structure above.
Then create a folder in `public/profiles` with the `id` of the profile you added.

Create also a folder called `media` in `public/profiles/{id}/`.  
An avatar should be placed as `avatar.jpg` in your profile folder.

### Add some media

IG Planner supports different [media types](media): images, videos, albums and reels.  
Just add your files in the media profiles folder in `public/profiles/{id}/media/`.

## Keyboard shortcuts

Press **R** to show some rulers.  
Press **D** to toggle dark theme.