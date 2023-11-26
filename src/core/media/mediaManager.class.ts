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
        this.parseMediaPosts()
        this.parseMediaReels()
    }

    private parseMediaPosts() {
        for (let rawMedia of this.rawUser.media.posts) {
            this.addMediaPost(rawMedia)
        }
    }

    private parseMediaReels() {
        for (let rawMedia of this.rawUser.media.posts) {
            if (!rawMedia.reel) continue

            this.addMediaReel(rawMedia)
        }

        for (let rawMedia of this.rawUser.media.reels) {
            this.addMediaReel(rawMedia)
        }
    }

    public addMediaPost(rawMedia: IRawMedia, unshift: boolean = false) {
        this.posts[!unshift ? 'push' : 'unshift'](new MediaPost(this.rawUser, rawMedia))
    }

    public addMediaReel(rawMedia: IRawMedia, unshift: boolean = false) {
        this.reels[!unshift ? 'push' : 'unshift'](new MediaPost(this.rawUser, rawMedia))
    }

    public exportMedia(): IRawUserMedia {
        return {
            posts: this.posts.map(m => m.exportMedia()),
            reels: this.reels.map(m => m.exportMedia()),
            stories: this.stories.map(m => m.exportMedia()),
            highlights: this.highlights.map(m => m.exportMedia()),
        }
    }
}