# Videos

As for images you can short import videos just using a simple string like `your-video.mp4`, but the first frame will be used as cover.
Obviously you can also set a cover.

```json
{
  "profile": { ... },
  "media": {
    "posts": [
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

## External videos

If your `.mp4` video is directly accessible from the web, you can set a direct link using shortened or regular imports.
You can also set direct links for the cover, like this:

```json
{
  "profile": { ... },
  "media": {
    "posts": [
      {
        "type": "video",
        "name": "https://websi.te/4.mp4",
        "cover": "https://websi.te/4-cover.jpg"
      },

      // shortened imports
      "https://websi.te/3.mp4",
      "https://websi.te/2.mp4",
      "https://websi.te/1.mp4"
    ]
  }
}
```

## Custom covers

You can set a custom cover using something like `4-cover.jpg` and providing the image in the profile media folder, or simply use a number that will set a specific frame of the video.

Once the planner is running, place your cursor for a second on the video and a slider will appear allowing you to choose the right frame more precisely. You can use decimals.

## Reels

Reels are supported, but you will have to define them in both lists based on your choice.
To avoid any problem during sorting, they were implemented like this.

```json
{
  "profile": { ... },
  "media": {
    "posts": [
      "https://websi.te/1.mp4"
    ],
    "reels": [
      "https://websi.te/1.mp4"
    ]
  }
}
```