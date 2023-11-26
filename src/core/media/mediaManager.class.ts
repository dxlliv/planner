import MediaPost from "./mediaPost.class";

export default class MediaManager {
    private readonly rawUser: IRawUser

    public posts: MediaPost[] = []
    public reels: MediaPost[] = []
    public stories: MediaPost[] = []
    public highlights: MediaPost[] = []

    constructor(rawUser: IRawUser) {
        this.rawUser = rawUser

        this.parseUserMedia()
    }

    private parseUserMedia(): IUserMedia {
        this.parseUserMediaPosts()
        this.parseUserMediaReels()
    }

    private parseUserMediaPosts() {
        for (let rawMedia of this.rawUser.media.posts) {
            this.addUserMediaPost(rawMedia)
        }
    }

    private parseUserMediaReels() {
        for (let rawMedia of this.rawUser.media.posts) {
            if (!rawMedia.reel) continue

            this.addUserMediaReel(rawMedia)
        }

        for (let rawMedia of this.rawUser.media.reels) {
            this.addUserMediaReel(rawMedia)
        }
    }

    public addUserMediaPost(rawMedia: IRawMedia, unshift: boolean = false) {
        this.posts[!unshift ? 'push' : 'unshift'](new MediaPost(this.rawUser, rawMedia))
    }

    public addUserMediaReel(rawMedia: IRawMedia, unshift: boolean = false) {
        this.reels[!unshift ? 'push' : 'unshift'](new MediaPost(this.rawUser, rawMedia))
    }

    public exportUserMedia() {
        return {
            posts: this.posts.map(m => m.exportMedia()),
            reels: this.reels.map(m => m.exportMedia()),
            stories: this.stories.map(m => m.exportMedia()),
            highlights: this.highlights.map(m => m.exportMedia()),
        }
    }
}