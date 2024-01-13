/**
 * Extract username from id
 *
 * @param id
 */
export function extractUsernameFromUserId(id: string) {
  return id.split("/").pop()
}
