module.exports = {
  base: "/ig-planner/docs/",
  title: "dxlliv/ig-planner",
  description: "Plan your Instagram grid like a pro",

  themeConfig: {
    repo: "dxlliv/ig-planner",
    docsRepo: "dxlliv/ig-planner",
    logo: "https://dxlliv.github.io/ig-planner/favicon.webp",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,

    sidebar: {
      "/": [
        { text: "Quick Start", link: "/" },
        { text: "Getting Started", link: "/getting-started" },
      ],
    },
  },
}
