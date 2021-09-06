export interface IProfile {
    details: {
        name: String
        username: String
        description: String
        website?: String,
        avatar?: String
        stats: {
            posts: Number
            followers: Number
            following: Number
        }
    },
    media: []
}