export default {
  common: {
    documentation: 'Documentation',
    support: 'Support the project on Patreon',
    hasChanges: 'has changes',
    actions: {
      createProfile: 'Create profile',
      openProfile: 'Open profile',
      editProfile: 'Edit profile',
      importProfile: 'Import from folder',
      remove: 'Remove',
      reset: 'Reset',
      close: 'Close',
      create: 'Create',
      submit: 'Submit',
      post: 'Post',
      unsavedChangesConfirm: 'Changes you made may not be saved.'
    },
  },
  pages: {
    about: {
      meta: {
        title: 'Planner for Instagram - Organize your profiles like a pro',
        description: "An elegant, free and open-source planner for Instagram. Drag and drop your photos, reorder your grid and preview your profile. No registration required",
      }
    },
    userSelect: {
      meta: {
        title: 'Planner - Select your profile'
      },
      intro: {
        p1: 'lets you preview <br />what your profile will look like.',
        p2: 'Bring your grid to the next level <br />with a text editor or interactively.',
      }
    }
  },
  instagram: {
    navigation: {
      home: 'Home',
      source: 'Source',
      explore: 'Explore',
      support: 'Support',
      create: 'Create',
      profile: 'Profile',
      save: 'Save',
      export: 'Export',
    },
    profile: {
      header: {
        posts: 'Posts',
        followers: 'Followers',
        following: 'Following',
        nowFollowing: 'Following',
        editProfile: 'Edit profile',
        shareProfile: 'Share profile',
      },
      editor: {
        fields: {
          username: {
            name: "Username",
            label: "Username",
            placeholder: "username",
          },
          name: {
            name: "Name",
            label: "Name",
            placeholder: "Name",
          },
          website: {
            name: "Website",
            label: "Website",
            placeholder: "Website",
          },
          verified: {
            name: "Verified",
            placeholder: "Verified",
          },
          biography: {
            name: "Bio",
            label: "Bio",
            placeholder: "Bio",
          },
          avatar: {
            name: "Avatar",
            label: "Avatar",
            placeholder: "Avatar",
          },
          followers_count: {
            name: "Followers",
            label: "Followers",
            placeholder: "Followers",
          },
          follows_count: {
            name: "Follows",
            label: "Follows",
            placeholder: "Follows",
          }
        }
      },
      post: {
        comment: {
          add: "Add a comment...",
          empty: "No comments here."
        }
      },
      media: {
        add: {
          title: "Create new post",
          subtitle: "Drag photos and videos here",
          action: "Select from computer"
        },
        menu: {
          addCover: "Add cover",
          addToAlbum: "Add media",
          cloneToReel: "Clone to reel",
          convertToAlbum: "Convert to album",
          convertToIframe: "Convert to iframe",
          remove: "Remove",
          removeCover: "Remove cover",
          removeFromAlbum: "Remove media",
          replaceCover: "Replace cover",
          replaceMedia: "Replace media",
        }
      },
      export: {
        title: "Export profile",
        description: "You could export your changes as a ZIP file,<br /> then simply overwrite the profile configuration<br /> located in the project folder at this location:",
        action: "Export as ZIP"
      },
      menu: {
        changeTheme: 'Change theme',
        settings: 'Settings',
      }
    }
  },
  $vuetify: {
    datePicker: {
      title: 'Select date'
    }
  }
}