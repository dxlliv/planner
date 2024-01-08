import { platformStructure } from "../core/structure"

/**
 * Return platform structure by platform
 *
 * @param platform
 */
export function getPlatformStructureUser(
  platform: string,
): IPlatformStructureUser {
  switch (platform) {
    case "instagram":
      return platformStructure[platform].user
    default:
      throw Error("No platform provided")
  }
}

/**
 * Extract username from id
 *
 * @param id
 */
export function extractUsernameFromUserId(id: string) {
  return id.split("/").pop()
}
