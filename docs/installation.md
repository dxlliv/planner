# Installation

Make sure you have [Node.js](https://nodejs.org/en/download) and Yarn installed on your system.  
Then bootstrap a new planner by running the following command:

```bash
npx create-plxnner planner
```

Enter the project directory and start your planner:

```bash
cd planner
yarn dev
```

## Project structure

Take a look at the project structure:

```
.
├─ pages
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
├─ nuxt.config.ts
├─ planner.config.ts
└─ package.json
```

As in any JavaScript project, dependencies are defined in the `package.json`.  
You should update `plxnner` from time to time to keep the project up-to-date.

## Configuration

Read more about how to set up your planner in [Configuration](getting-started#configuration).