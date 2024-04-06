# Images

You can declare images simply by defining them in the media property.  
Then place your images in the `/public/user/instagram/{username}/media` folder.

```json
{
  "profile": { ... },
  "media": {
    "posts": [
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

Images can also be imported using shortened imports, just define the path with a string.  
Then they will be parsed and imported like regular imports.

## External images

You can use direct links, if the images are hosted on external hosts.