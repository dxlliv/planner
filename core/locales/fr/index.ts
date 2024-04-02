export default {
  common: {
    documentation: 'Documentation',
    support: 'Soutenez le projet sur Patreon',
    hasChanges: 'a des modifications',
    actions: {
      createProfile: 'Créer un profil',
      openProfile: 'Ouvrir le profil',
      editProfile: 'Modifier le profil',
      importProfile: 'Importer depuis un dossier',
      remove: 'Supprimer',
      reset: 'Réinitialiser',
      create: 'Créer',
      submit: 'Soumettre',
      post: 'Publier',
      unsavedChangesConfirm: 'Les modifications que vous avez apportées peuvent ne pas être enregistrées.'
    },
  },
  pages: {
    about: {
      meta: {
        title: "Planificateur pour Instagram - Organisez vos profils comme un pro",
        description: "Un planificateur élégant, gratuit et open-source pour Instagram. Faites glisser et déposez vos photos, réorganisez votre grille et prévisualisez votre profil. Aucune inscription requise."
      }
    },
    userSelect: {
      meta: {
        title: "Plxnner - Sélectionnez votre profil"
      },
      intro: {
        p1: "permet de prévisualiser <br />à quoi ressemblera votre Instagram profil.",
        p2: "Amenez votre grille au niveau supérieur <br />avec un éditeur de texte ou interactif.",
      }
    }
  },
  instagram: {
    navigation: {
      home: 'Accueil',
      explore: 'Explorer',
      support: 'Support',
      create: 'Créer',
      profile: 'Profil',
      save: 'Enregistrer',
      export: 'Exporter',
    },
    profile: {
      header: {
        posts: 'publications',
        followers: 'abonnés',
        following: 'abonnements',
      },
      post: {
        comment: {
          add: "Ajouter un commentaire...",
          empty: "Aucun commentaire ici."
        }
      },
      media: {
        add: {
          title: "Créer une nouvelle publication",
          subtitle: "Faites glisser les photos et vidéos ici",
          action: "Sélectionner depuis l'ordinateur"
        }
      },
      export: {
        title: "Exporter le profil",
        description: "Pouvez exporter vos modifications sous forme ZIP,<br /> puis simplement remplacer la configuration du profil<br /> située dans le dossier du projet à cet emplacement:",
        action: "Exporter en ZIP"
      },
      deluxe: {
        freeOptions: {
          enjoy: "Profitez de cette version gratuite de",
          youCan: "Pouvez",
          or: "ou",
          tryPlanner: "jouer avec cette instance",
          hostPlanner: "héberger la vôtre"
        },
        description: "Vous aimez ce projet et souhaitez vous démarquer en offrant<br />une version spéciale et personnalisée de votre profil Instagram,<br />mettant en avant le meilleur de ce que vous avez créé?",
        action: "Demander un planificateur Deluxe",
      },
      menu: {
        addCover: "Ajouter une couverture",
        addToAlbum: "Ajouter des médias",
        cloneToReel: "Cloner dans le reel",
        convertToAlbum: "Convertir en album",
        convertToIframe: "Convertir en iframe",
        remove: "Supprimer",
        removeCover: "Supprimer la couverture",
        removeFromAlbum: "Supprimer des médias",
        replaceCover: "Remplacer la couverture",
        replaceMedia: "Remplacer les médias",
      }
    }
  },
  $vuetify: {
    datePicker: {
      title: 'Sélectionner une date'
    }
  }
}
