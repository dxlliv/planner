module.exports = {
    base: '/ig-planner/docs/',
    title: 'Instagram Planner',
    description: 'Plan your Instagram grid like a pro',

    themeConfig: {
        repo: 'dxlliv/ig-planner',
        docsRepo: 'dxlliv/ig-planner',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,

        sidebar: {
            '/': [
                { text: 'Home', link: '/' },
                { text: 'Getting Started', link: '/getting-started' },
                { text: 'Supported Media', link: '/media' },
            ],
        },
    },
}