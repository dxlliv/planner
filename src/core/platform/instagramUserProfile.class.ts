import UserProfile from "../user/userProfile.class";
import {removeUndefinedFromObject} from "../../utils/utilsObject";

export default class InstagramUserProfile extends UserProfile implements IUserProfile {
    public user: IInstagramUser

    private structure: {
        fields: {
            [fieldKey: string]: {
                type: string
                methods?: {
                    set: string
                }
            }
        }
    } = {
        fields: {
            name: {
                type: 'string',
                methods: {
                    set: 'setName',
                }
            },
            website: {
                type: 'url',
                methods: {
                    set: 'setWebsite',
                }
            },
            verified: {
                type: 'boolean',
                methods: {
                    set: 'setVerified',
                }
            },
            biography: {
                type: 'text',
                methods: {
                    set: 'setBiography',
                }
            },
            avatar: {
                type: 'file',
                methods: {
                    set: 'setAvatar',
                }
            },
            followers_count: {
                type: 'number',
                methods: {
                    set: 'setFollowersCount',
                }
            },
            follows_count: {
                type: 'number',
                methods: {
                    set: 'setFollowsCount',
                }
            },
            posts_count: {
                type: 'function',
                /*
                callback: function(user: any) {
                    return user.media.posts.length + user.media.reels.length
                }
                 */
            }
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