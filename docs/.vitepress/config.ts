module.exports = {
  base: "/ig-planner/docs/",
  title: "IG Planner",
  description: "Plan your Instagram grid like a pro",

  themeConfig: {
    repo: "dxlliv/ig-planner",
    docsRepo: "dxlliv/ig-planner",
    logo: "https://dxlliv.github.io/ig-planner/favicon.ico",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,

    nav: [
      { text: "Demo", link: "https://dxlliv.github.io/ig-planner/" },
    ],
    sidebar: {
      "/": [
        { text: "Quick Start", link: "/" },
        { text: "Getting Started", link: "/getting-started" },
      ],
    },
  },
}
