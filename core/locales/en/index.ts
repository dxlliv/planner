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
        title: 'Plxnner - Select your profile'
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
      explore: 'Explore',
      support: 'Support',
      create: 'Create',
      profile: 'Profile',
      save: 'Save',
      export: 'Export',
    },
    profile: {
      header: {
        posts: 'posts',
        followers: 'followers',
        following: 'following',
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
        }
      },
      export: {
        title: "Export profile",
        description: "You could export your changes as a ZIP file,<br /> then simply overwrite the profile configuration<br /> located in the project folder at this location:",
        action: "Export as ZIP"
      },
      deluxe: {
        freeOptions: {
          enjoy: "Enjoy this free to use version of",
          youCan: "You can",
          or: "or",
          tryPlanner: "play with this instance",
          hostPlanner: "host yours"
        },
        description: "Do you like this project and wish to stand out by offering<br /> a special and tailor-made version of your Instagram profile<br /> that showcases on your website the best you've created?",
        action: "Request a Deluxe Planner",
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
    }
  },
  $vuetify: {
    datePicker: {
      title: 'Select date'
    }
  }
}