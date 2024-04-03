# Albums

If you want to define an album as post, just provide an array with each filename.

```json
{
  "profile": { ... },
  "media": {
    "posts": [
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

## External images

You can use direct links as for images, if they are available on external hosts.