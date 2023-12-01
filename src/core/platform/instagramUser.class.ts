import User from "../user/user.class";
import InstagramPlatform from "./instagramPlatform.class";
import InstagramUserProfile from "./instagramUserProfile.class";
import InstagramUserMedia from "./instagramUserMedia.class";

export default class InstagramUser extends User implements IInstagramUser {
    public readonly platform = new InstagramPlatform()

    constructor(
        raw: IRawUser,
        origin: string,
        storeImmediately: boolean = false
    ) {
        // pass all the data to User class
        super(raw, origin, storeImmediately)

        /*
        this.structure.user = {
            //profile: new InstagramUserProfile(this),
            //media: new InstagramUserMedia(this)
        }
         */
    }

    public initialize(storeImmediately: boolean = false) {
        this.parseUserProfile()
        this.parseUserMedia()
    }

    public parseUserProfile() {
        this.profile = new InstagramUserProfile(this)
    }

    public parseUserMedia() {
        this.media = new InstagramUserMedia(this);
    }
}