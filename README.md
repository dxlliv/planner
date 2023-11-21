# Instagram Planner

> An open-source planner for your Instagram profile

## About

**dxlliv/ig-planner** let you preview what your profile grid will look like.  
Plan the grid with a text editor and build your definitive Instagram profile.

**[Demo](https://dxlliv.github.io/ig-planner/) · [Documentation](https://dxlliv.github.io/ig-planner/docs/) · [Support](https://patreon.com/dxlliv)**

## Features
- **Organize your grid**  
  Place your media in the user folder and define it in the configuration.


- **A wide range of media**  
  It supports both local and remote images, videos, albums and iframes.


- **Plan your everything**  
  You will be able to plan posts, reels, stories and highlights in a while.


- **Limitless changes**  
  Edit your media as much as you want and build your definitive profile.


- **Backup your account**  
  It can serve as a planner but also as a backup for all of your content.


- **High quality media**  
  Avoid compression and deliver your profile without annoying stuff.


- **Host it anywhere**  
  Take ownership of your data, put your files in a repository and deploy.


## Getting started

Be sure you have Node.js and NPM installed.  
Clone the repository and move to the project directory:

```bash
git clone https://github.com/dxlliv/ig-planner.git && cd ig-planner
```

Install dependencies and run the project with `yarn` or `npm`:

```bash
yarn install && yarn dev

# or use npm
npm install && npm run dev
```

### Configuration

If you know how to properly edit a .json file, it will be simple.  
Read the [documentation](https://dxlliv.github.io/ig-planner/docs/) for further information.

## Development

I'd like to make this tool accessible to all the people with an intuitive interface directly from the browser, without installing any software or changing a single line of code. Said so, feel free to support the project.

## Roadmap
- [ ] Profile viewer
  - [x] Posts
    - [x] Image support
    - [x] Video support
    - [x] Album support
    - [x] Iframe support
    - [ ] Caption
    - [ ] Location
    - [ ] Sound
    - [ ] Publication date
  - [x] Reels
  - [ ] Stories
  - [ ] Highlights
- [ ] Profile editor
  - [ ] Make use of indexedDB with Dexie.js
  - [ ] Create a local database
  - [ ] Import profile from folder to local db
  - [ ] Edit profile
  - [ ] Drag & drop media
  - [ ] Sort media
  - [ ] Delete profile from local db
  - [ ] Export profile to folder
- [x] Implement Storybook
- [ ] Implement i18n