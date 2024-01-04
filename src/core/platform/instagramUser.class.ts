import User from "../user/user.class";
import InstagramUserProfile from "./instagramUserProfile.class";
import InstagramUserMedia from "./instagramUserMedia.class";

export default class InstagramUser extends User implements IInstagramUser {
    public readonly platform: IPlatforms = 'instagram'
    public id: string = ''

    public profile: IInstagramUserProfile = {} as IInstagramUserProfile
    public media: IInstagramUserMedia = {} as IInstagramUserMedia

    constructor(
        raw: IRawUser,
        origin: string,
    ) {
        super(raw, origin)

        // define instagram user id (platform + username)
        this.id = `${this.platform}/${this.raw.profile.username}`

        // first check if storage contains local data
        // then restore or directly parse profile & media
        this.initialize()
    }

    public async initializeUserProfile() {
        this.profile = new InstagramUserProfile(this)

        await this.profile.import()
    }

    public initializeUserMedia() {
        this.media = new InstagramUserMedia(this)
    }
}