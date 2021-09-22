# Supported Media

Instagram Planner supports different media types: images, videos, albums and reels.  
Check these examples and add your media in the `config/profiles/{id}/media/` folder.

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
      
      // short import
      "3.jpg",
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

      // short import
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
        "list": [
          "3.jpg",
          "2.jpg",
          "1.jpg"
        ]
      }
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
        "name": "3-reel.mp4",
        "cover": 0
      },

      // short import
      "3.jpg",
      "2.jpg",
      "1.jpg"
    ]
  }
}
```