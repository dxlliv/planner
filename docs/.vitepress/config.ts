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
              { text: "Getting Started", link: "/getting-started" },
            ]
          },
          {
            text: 'Planner',
            collapsed: false,
            items: [
              { text: "Installation", link: "/installation" },
              { text: "Overview", link: "/profiles-overview" },
              { text: "Importing", link: "/profile-importing" },
              { text: "Configuration", link: "/profile-configuration" },
              { text: "Exporting", link: "/profile-exporting" },
            ]
          },
          {
            text: 'Media',
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
              { text: "Shortcuts", link: "/shortcuts" }
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