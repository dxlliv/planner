/**
 * Resolve media file promises for media export into indexed db
 *
 * @param mediaList
 */
export async function fulfillMediaFilesForExport(
  mediaList: IMedia[],
): Promise<any> {
  const result = []

  for await (const media of mediaList) {
    media.fetch()
    result.push(await media.export())
  }

  return result
}
