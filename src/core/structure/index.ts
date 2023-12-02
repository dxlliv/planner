export const platformStructure = {
    instagram: {
        user: {
            profile: {
                fields: {
                    name: {
                        name: 'Name',
                        placeholder: 'Name',
                        type: 'string',
                        methods: {
                            set: 'setName',
                        },
                    },
                    website: {
                        name: 'Website',
                        placeholder: 'Website',
                        type: 'url',
                        methods: {
                            set: 'setWebsite',
                        }
                    },
                    verified: {
                        name: 'Verified',
                        placeholder: 'Verified',
                        type: 'boolean',
                        methods: {
                            set: 'setVerified',
                        }
                    },
                    biography: {
                        name: 'Bio',
                        placeholder: 'Bio',
                        type: 'text',
                        methods: {
                            set: 'setBiography',
                        },
                        maxlength: 150
                    },
                    avatar: {
                        name: 'Avatar',
                        placeholder: 'Avatar',
                        type: 'file',
                        methods: {
                            set: 'setAvatar',
                        }
                    },
                    followers_count: {
                        name: 'Followers count',
                        placeholder: 'Followers count',
                        type: 'number',
                        methods: {
                            set: 'setFollowersCount',
                        }
                    },
                    follows_count: {
                        name: 'Follows count',
                        placeholder: 'Follows count',
                        type: 'number',
                        methods: {
                            set: 'setFollowsCount',
                        }
                    },
                    posts_count: {
                        name: 'Posts count',
                        placeholder: 'Posts count',
                        type: 'number',
                        methods: {
                            set: 'setPostsCount',
                        }
                    }
                }
            },
            collections: {
                posts: {

                },
                reels: {

                },
            }
        }
    }
}