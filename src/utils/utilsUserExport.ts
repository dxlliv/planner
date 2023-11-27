import MediaPost from "../core/media/mediaPost.class";

export async function fulfillMediaPostsForMediaExport(posts?: MediaPost[]): Promise<any> {
    const result = []

    for await (const media of posts) {
        result.push(await media.exportMedia())
    }

    return result
}