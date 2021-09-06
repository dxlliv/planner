# Instagram Planner
> Plan your Instagram posts to preview what your profile grid will look like

## Quick start
Be sure you have Node.js installed, then clone the repository
```
git clone https://github.com/dvilla8/instagram-planner.git
```

Move to the directory you have just cloned
```
cd instagram-planner
```

Install dependencies and run this project
```
npm install && npm run dev
```

## Documentation

#### Set up a profile

Define an Instagram profile in the config/profiles.json file.

Create a folder in config/profiles for each one you have added.  
You have to name it like the id of the user, not the username.

An avatar should be placed as avatar.jpg in your profile folder.  
Create also a folder called media and put your images inside.


#### Media support

Images should be declared as string in the media array configuration.  
Videos are supported too, just define them as an object like this:
```json
{
    "type": "video",
    "name": "my-video.mp4",
    "cover": 12
}
```


#### Tips & Tricks

Press **R** to show some rulers.  
Press **R** to toggle the dark theme.