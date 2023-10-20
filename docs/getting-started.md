# Getting started

## Installation

Be sure you have [Node.js](https://nodejs.org) and NPM installed.   
Clone the repository and move to the project directory:

```bash
git clone https://github.com/dxlliv/ig-planner.git && cd ig-planner
```

Install dependencies and run the project:

```bash
npm install && npm run dev

# or use yarn
yarn install && yarn dev
```

## Configuration

Customize the `config/users.json` file with your favorite editor.  
Visual Studio Code will just be fine, but you can use Notepad++ too.

```json
[
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
]
```

### Set up a new user

Define your users under the `config/users.json` configuration file  
and create a `public/profiles/{username}` folder for each one.

Place an image called `avatar.jpg` in your profile folder.

### Provide some media

IG Planner supports different media types: image, video, album and iframe.

Add your media to your `public/profiles/{username}/media/` folder  
and define all the media in the users configuration like the examples.

### Media support

IG Planner supports different media types: image, video, album and iframe.  

#### Images

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

```json
{
  "dxlliv": {
    "media": [
      {
        "type": "video",
        "name": "4.mp4",
        "cover": 0
      },
      
      // shortened imports (todo)
      "3.mp4",
      "2.mp4",
      "1.mp4"
    ]
  }
}
```

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

      // shortened imports
      "3.mp4",
      "2.jpg",
      "1.jpg"
    ]
  }
}
```

#### Iframes

```json
{
  "dxlliv": {
    "media": [
      {
        "type": "iframe",
        "href": "http://localhost:3000/my-post"
      },

      // shortened imports
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
