/**
 * Extract username from id
 *
 * @param id
 */
export function extractUsernameFromUserId(id: string) {
  return id.split("/").pop()
}

/**
 * Return user platform or default platform if missing
 * @param user
 */
export function parseUserPlatform(user: IUser | IRawUser): IUserPlatform {
  const config = usePlannerConfig()

  return user.platform
  ?? config.platform.default
  ?? "instagram"
}