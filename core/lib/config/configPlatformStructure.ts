export const configPlatformStructure = {
  instagram: {
    user: {
      profile: {
        fields: {
          username: {
            name: "Username",
            placeholder: "username",
            type: "string",
            validation: {
              required: true,
              minLength: 3,
              maxLength: 30,
            },
            methods: {
              set: "setUsername",
            },
          },
          name: {
            name: "Name",
            placeholder: "Name",
            type: "string",
            validation: {
              maxLength: 30,
            },
            methods: {
              set: "setName",
            },
          },
          website: {
            name: "Website",
            placeholder: "Website",
            type: "url",
            methods: {
              set: "setWebsite",
            },
          },
          verified: {
            name: "Verified",
            placeholder: "Verified",
            type: "boolean",
            methods: {
              set: "setVerified",
            },
          },
          biography: {
            name: "Bio",
            placeholder: "Bio",
            type: "text",
            methods: {
              set: "setBiography",
            },
            maxlength: 150,
          },
          avatar: {
            name: "Avatar",
            placeholder: "Avatar",
            type: "file",
            methods: {
              set: "setAvatar",
            },
          },
          followers_count: {
            name: "Followers",
            placeholder: "Followers",
            type: "number",
            methods: {
              set: "setFollowersCount",
            },
          },
          follows_count: {
            name: "Follows",
            placeholder: "Follows",
            type: "number",
            methods: {
              set: "setFollowsCount",
            },
          },
        },
      },
      collections: {
        posts: {},
        reels: {},
      },
    },
  },
}
