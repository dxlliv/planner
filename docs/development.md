# Development

If you intend to substantially modify the planner, you will need to clone the repository.

## Preparation

Make sure you have [Node.js](https://nodejs.org/en/download) and Npm installed.  
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

## Project structure

```
.
├─ core
├─ src
│  └─ public
│     └─ user
│        └─ instagram
│           └─ {username}
│              ├─ media
│              │  ├─ 1.jpg
│              │  ├─ 2.jpg
│              │  └─ 3.jpg
│              ├─ avatar.jpg
│              └─ config.json
├─ nuxt.config.ts
└─ planner.config.ts
```


If you know Vue.js, you should be able to get around without any problems.  
Feel free to contribute, you can fork the repository and submit any improvements.