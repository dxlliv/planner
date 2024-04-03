# Iframes

You can define iframes if you are using custom tools to generate your image dynamically,
or maybe just to define a YouTube Short or a media from other platforms.

```json
{
  "profile": { ... },
  "media": {
    "posts": [
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