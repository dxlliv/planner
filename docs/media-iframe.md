# Iframes

You could use iframes if you are using custom tools to generate your images dinamically,
or maybe just to define a YouTube Short or posts from other platforms as reel.

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