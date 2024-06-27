export const configPlatformStructure = {
  instagram: {
    user: {
      profile: {
        fields: {
          username: {
            name: 'instagram.profile.editor.fields.username.name',
            label: 'instagram.profile.editor.fields.username.label',
            placeholder: 'instagram.profile.editor.fields.username.placeholder',
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
            name: 'instagram.profile.editor.fields.name.name',
            label: 'instagram.profile.editor.fields.name.label',
            placeholder: 'instagram.profile.editor.fields.name.placeholder',
            type: "string",
            validation: {
              maxLength: 30,
            },
            methods: {
              set: "setName",
            },
          },
          website: {
            name: 'instagram.profile.editor.fields.website.name',
            label: 'instagram.profile.editor.fields.website.label',
            placeholder: 'instagram.profile.editor.fields.website.placeholder',
            type: "url",
            methods: {
              set: "setWebsite",
            },
          },
          verified: {
            name: 'instagram.profile.editor.fields.verified.name',
            placeholder: 'instagram.profile.editor.fields.verified.placeholder',
            type: "boolean",
            methods: {
              set: "setVerified",
            },
          },
          biography: {
            name: 'instagram.profile.editor.fields.biography.name',
            label: 'instagram.profile.editor.fields.biography.label',
            placeholder: 'instagram.profile.editor.fields.biography.placeholder',
            type: "text",
            methods: {
              set: "setBiography",
            },
            maxlength: 150,
          },
          avatar: {
            name: 'instagram.profile.editor.fields.avatar.name',
            label: 'instagram.profile.editor.fields.avatar.label',
            placeholder: 'instagram.profile.editor.fields.avatar.placeholder',
            type: "file",
            methods: {
              set: "setAvatar",
            },
          },
          followers_count: {
            name: 'instagram.profile.editor.fields.followers_count.name',
            label: 'instagram.profile.editor.fields.followers_count.label',
            placeholder: 'instagram.profile.editor.fields.followers_count.placeholder',
            type: "number",
            methods: {
              set: "setFollowersCount",
            },
          },
          follows_count: {
            name: 'instagram.profile.editor.fields.follows_count.name',
            label: 'instagram.profile.editor.fields.follows_count.label',
            placeholder: 'instagram.profile.editor.fields.follows_count.placeholder',
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
