/**
 * Resolve file media promises for media export into indexed db
 *
 * @param mediaList
 */
export async function fulfillMediaPostsForMediaExport(mediaList: IMedia[]): Promise<any> {
    const result = []

    for await (const media of mediaList) {
        result.push(await media.export())
    }

    return result
}