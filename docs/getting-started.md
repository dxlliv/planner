# Getting started

## Installation

Be sure you have [Node.js](https://nodejs.org) and NPM installed.   
Clone the repository and move to the project directory.

```bash
git clone https://github.com/dxlliv/ig-planner.git && cd ig-planner
```

Install dependencies and run the project.

```bash
npm install && npm run dev

# or use yarn
yarn install && yarn dev
```

## Configuration

Define your profile using your favorite editor and create a `config.json` file.

```json
{
  "profile": {
    "fields": {
      "username": "dxlliv",
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
}
```

### Set up a new user

After defining your profile configuration,
create a new folder under `public/user/{username}`
and put the `config.json` you created just before,
making sure you have provided a valid JSON.

Then you have to define the profile path in the root `config.json`, like the example.

```json
{
  "users": [
    "user/dxlliv",
    "user/dxvfpv",
    "user/{username}"
  ]
}
```

Place an image called `avatar.jpg` in your profile folder.

### Provide your media

This planner supports different media types: images, videos, albums and iframes.

Place your media in the `public/user/{username}/media/` and define all of your content in the profile configuration like the examples. Create the `media` folder if you are setting a new user.

#### Images

You can short import images just defining the path, without the `type` property.

```json
{
  "profile": {
    "media": [
      {
        "type": "image",
        "name": "4.jpg"
      },

      // shortened imports
      "3.jpg",
      "2.jpg",
      "1.jpg"
    ]
  }
}
```

#### Videos

As for images, you can short import videos but it will used the first frame as cover.

```json
{
  "dxlliv": {
    "media": [
      {
        "type": "video",
        "name": "4.mp4",
        "reel": true, // optional
        "cover": 15 // optional
      },
      
      // shortened imports
      "3.mp4",
      "2.mp4",
      "1.mp4"
    ]
  }
}
```

You can set a custom cover using strings like `4-cover.jpg` providing the image in the media folder, or simply use a number that will set a specific frame of your video as the cover.

#### Albums

```json
{
  "dxlliv": {
    "media": [
      // import images as album
      {
        "type": "album",
        "list": ["4.jpg", "4x1.jpg", "4x2.jpg"]
      },

      // shortened import
      ["3.jpg", "3x1.jpg", "3x2.jpg"],
      
      // other imports
      "2.jpg",
      "1.jpg"
    ]
  }
}
```

#### Iframes

You could use iframes if you are using external tools, or maybe to define a YouTube Short as reel.

```json
{
  "dxlliv": {
    "media": [
      {
        "type": "iframe",
        "href": "http://localhost:3000/my-post"
      },

      // other imports
      "3.jpg",
      "2.jpg",
      "1.jpg"
    ]
  }
}
```

## Tools

### Dark theme
Press **D** to toggle dark theme.

### Text ruler
Press **R** to show some rulers.  
