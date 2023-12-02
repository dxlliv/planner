import UserProfile from "../user/userProfile.class";
import {removeUndefinedFromObject} from "../../utils/utilsObject";
import {platformStructure} from "../structure";

export default class InstagramUserProfile extends UserProfile implements IInstagramUserProfile {
    public user: IInstagramUser

    private structure: IPlatformStructureUserProfile = {
        fields: {
            ...platformStructure.instagram.user.profile.fields
        }
    }

    constructor(user: IInstagramUser) {
        super(user)

        this.user = user

        this.import()
    }

    get public_profile() {
        return `https://instagram.com/${this.user.username}`
    }

    public import() {
        for (const [fieldKey, field] of Object.entries(this.structure.fields)) {
            if (!field.methods || !field.methods.set) continue

            // @ts-ignore
            this[field.methods.set](this.user.raw.profile[fieldKey])
        }
    }

    public async export(): Promise<IRawUserProfile> {
        return removeUndefinedFromObject({
            name: this.name,
            verified: this.verified,
            followers_count: this.followers_count,
            follows_count: this.follows_count,
            website: this.website?.href,
            biography: this.biography,
            avatar: await this.avatar?.file
        })
    }
}