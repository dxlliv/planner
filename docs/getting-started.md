# Getting started

## Installation

Clone the repository and enter the directory:

```bash
git clone https://github.com/dvilla8/ig-planner.git && cd ig-planner
```

Install dependencies and run this project with `yarn` or `npm`:

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

Define in the profiles configuration a new profile `id` (it can be your username) and copy the profile object structure.
Then create a folder in `config/profiles` with the id `id` of the profile you added.

An avatar should be placed as `avatar.jpg` in your profile folder.  
Create also a folder called `media` and put some images in.

### Add some new media

Instagram Planner supports all kind of media: images, videos, albums and reels.  
Just add your files in the media profiles folder in `config/profiles/{id}/media/`.

## Keyboard shortcuts

Press **R** to show some rulers.  
Press **D** to toggle dark theme.