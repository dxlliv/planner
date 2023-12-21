# Quick Start

## Try it online

You can try **dxlliv/planner** directly in your browser on [GitHub](https://dxlliv.github.io/planner/).  
If you prefer to run your planner or host it somewhere, keep reading. 

## Installation

Make sure you have Node.js and NPM installed.  
Clone the repository and move to the project directory:

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

You can add users directly from the browser, but if you want to host an instance of the planner somewhere and would like to show some users as soon as you open the planner, you will need to edit the main configuration file and the public folder of each user.

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
