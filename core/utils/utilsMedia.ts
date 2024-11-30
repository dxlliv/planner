import {VIcon} from "vuetify/components"

export function singularizeMediaCollectionName(collection: string) {
  switch (collection) {
    case "posts":
      return "post"
    case "reels":
      return "reel"
    /*
        case 'highlights':
            return 'highlight'
        case 'stories':
            return 'story'
         */
    default:
      return collection
  }
}

export function getMediaTypeIcon(type: string) {
  let icon = ''

  switch(type) {
    case "album":
      icon = 'mdi mdi-checkbox-multiple-blank'
      break
    case "video":
      icon = 'mdi mdi-play'
      break
  }

  return {
    component: VIcon,
    icon
  }
}