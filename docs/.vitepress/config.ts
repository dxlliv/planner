module.exports = {
  base: "/planner/docs/",
  title: "dxlliv/planner",
  description: "Plan your social profiles grid like a pro",

  themeConfig: {
    repo: "dxlliv/planner",
    docsRepo: "dxlliv/planner",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,

    nav: [
      { text: "Demo", link: "https://dxlliv.github.io/planner/" },
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
      { icon: 'github', link: 'https://github.com/dxlliv/planner' }
    ],

    footer: {
      copyright: 'dxlliv/planner'
    },
  },
}