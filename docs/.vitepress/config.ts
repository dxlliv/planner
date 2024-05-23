module.exports = {
  base: "/planner/docs/",
  title: "dxlliv/planner",
  description: "Plan your social profile grid like a pro",

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
              { text: "Overview", link: "/overview" },
              { text: "Installation", link: "/installation" },
              { text: "Configuration", link: "/configuration" },
              //{ text: "Importing", link: "/profile-importing" },
              //{ text: "Exporting", link: "/profile-exporting" },
              { text: "Development", link: "/development" },
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
              { text: "Shortcuts", link: "/shortcuts" },
            ]
          },
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dxlliv/planner' }
    ],

    footer: {
      copyright: 'dxlliv/planner is released under the GPL-3.0 license'
    },
  },
}