# Supported Media

Instagram Planner supports different media types: images, videos, albums and reels.  
Add your files in the `config/profiles/{id}/media/` folder and define all the media.

## Images

```json
{
  "dxlliv": {
    "media": [
      // strict image import
      {
        "type": "image",
        "name": "4.jpg"
      },

      // short image import
      "3.jpg",

      // other imports
      "2.jpg",
      "1.jpg"
    ]
  }
}
```

## Videos

```json
{
  "dxlliv": {
    "media": [
      // strict video import
      {
        "type": "video",
        "name": "4-video.mp4",
        "cover": 0
      },

      // other imports
      "3.jpg",
      "2.jpg",
      "1.jpg"
    ]
  }
}
```

## Albums

```json
{
  "dxlliv": {
    "media": [
      // import images as an album
      {
        "type": "album",
        "list": ["4.jpg", "4x1.jpg", "4x2.jpg"]
      },

      // other imports
      "3.jpg",
      "2.jpg",
      "1.jpg"
    ]
  }
}
```

## Reels

```json
{
  "dxlliv": {
    "media": [
      // reel import
      {
        "type": "reel",
        "name": "4-reel.mp4",
        "cover": 0
      },

      // other imports
      "3.jpg",
      "2.jpg",
      "1.jpg"
    ]
  }
}
```
