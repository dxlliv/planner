export function singularizeMediaCollectionName(collection: string) {
    switch(collection) {
        case 'posts':
            return 'post'
        case 'reels':
            return 'reel'
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