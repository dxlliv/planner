# Installation

## Premise

This planner is built with JavaScript using an awesome framework called Vue.js.  
You can learn more about Vue.js on [their website](https://vuejs.org/), it's really straightforward to start.

### Try it online

You can use **dxlliv/planner** directly in your browser using the [GitHub Demo](https://dxlliv.github.io/planner/).  

---

Installation is not mandatory, you can create new profiles with an intuitive interface
or import a profile selecting a pre-configured folder (or a .zip file, soon) using the demo. 

Changes will be saved in your browser using a client-side storage called [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).  
If you prefer to run the planner locally and host it somewhere once done, keep reading.

## Installation

Make sure you have [Node.js](https://nodejs.org/en/download) and NPM installed.  

Once ready, open your terminal and move to your preferred folder.  
Clone the **dxlliv/planner** repository and move to the project directory:

```bash
git clone https://github.com/dxlliv/planner.git && cd planner
```

Install dependencies and run the project:

```bash
npm install && npm run dev

# or use yarn
yarn install && yarn dev
```

## File structure

Take a look at the project structure. The `package.json` contains all the libraries have been used
to develop this and should not be touched unless you know what you are doing.

```
.
├─ public
│  └─ user
│     └─ instagram
│        └─ {username}
│           ├─ media
│           │  ├─ 1.jpg
│           │  ├─ 2.jpg
│           │  └─ 3.jpg
│           ├─ avatar.jpg
│           └─ config.json
├─ src
├─ config.json
└─ package.json
```

The files you have to modify are the `config.json`. The main configuration is located in the root folder and contains a list of profile paths. Other configurations live in the public folder and are related to each profile, like `public/user/instagram/dxlliv/config.json`.

## Configuration

Read more about the configuration in [Getting Started](getting-started#configuration).
