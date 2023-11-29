module.exports = {
  base: "/ig-planner/docs/",
  title: "dxlliv/ig-planner",
  description: "Plan your Instagram grid like a pro",

  themeConfig: {
    repo: "dxlliv/ig-planner",
    docsRepo: "dxlliv/ig-planner",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,

    nav: [
      { text: "Demo", link: "https://dxlliv.github.io/ig-planner/" },
      { text: "Support", link: "https://patreon.com/dxlliv" },
    ],
    sidebar: {
      "/": {
        items: [
          {
            text: 'Introduction',
            collapsed: false,
            items: [
              { text: "Quick Start", link: "/quick-start" },
              { text: "Getting Started", link: "/getting-started" },
            ]
          },
          {
            text: 'Supported media',
            collapsed: false,
            items: [
              { text: "Images", link: "/media-image" },
              { text: "Videos", link: "/media-video" },
              { text: "Albums", link: "/media-album" },
              { text: "Iframes", link: "/media-iframe" },
            ]
          },
          {
            text: 'Extra',
            collapsed: false,
            items: [
              { text: "Tools", link: "/tools" }
            ]
          },
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dxlliv/ig-planner' }
    ],

    footer: {
      copyright: 'dxlliv/ig-planner'
    },
  },
}