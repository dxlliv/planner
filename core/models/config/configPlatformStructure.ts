export const configPlatformStructure = {
  instagram: {
    user: {
      profile: {
        fields: {
          username: {
            name: 'profile.editor.fields.username.name',
            label: 'profile.editor.fields.username.label',
            placeholder: 'profile.editor.fields.username.placeholder',
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
            name: 'profile.editor.fields.name.name',
            label: 'profile.editor.fields.name.label',
            placeholder: 'profile.editor.fields.name.placeholder',
            type: "string",
            validation: {
              maxLength: 30,
            },
            methods: {
              set: "setName",
            },
          },
          website: {
            name: 'profile.editor.fields.website.name',
            label: 'profile.editor.fields.website.label',
            placeholder: 'profile.editor.fields.website.placeholder',
            type: "url",
            methods: {
              set: "setWebsite",
            },
          },
          verified: {
            name: 'profile.editor.fields.verified.name',
            placeholder: 'profile.editor.fields.verified.placeholder',
            type: "boolean",
            methods: {
              set: "setVerified",
            },
          },
          biography: {
            name: 'profile.editor.fields.biography.name',
            label: 'profile.editor.fields.biography.label',
            placeholder: 'profile.editor.fields.biography.placeholder',
            type: "text",
            methods: {
              set: "setBiography",
            },
            maxlength: 150,
          },
          avatar: {
            name: 'profile.editor.fields.avatar.name',
            label: 'profile.editor.fields.avatar.label',
            placeholder: 'profile.editor.fields.avatar.placeholder',
            type: "file",
            methods: {
              set: "setAvatar",
            },
          },
          followers_count: {
            name: 'profile.editor.fields.followers_count.name',
            label: 'profile.editor.fields.followers_count.label',
            placeholder: 'profile.editor.fields.followers_count.placeholder',
            type: "number",
            methods: {
              set: "setFollowersCount",
            },
          },
          follows_count: {
            name: 'profile.editor.fields.follows_count.name',
            label: 'profile.editor.fields.follows_count.label',
            placeholder: 'profile.editor.fields.follows_count.placeholder',
            type: "number",
            methods: {
              set: "setFollowsCount",
            },
          },
        },
      },
      media: {
        collections: {
          posts: {},
          reels: {},
        },
      }
    },
  },
}
