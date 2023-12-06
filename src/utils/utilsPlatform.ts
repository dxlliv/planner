import {platformStructure} from "../core/structure";

/**
 * Return platform structure by platform
 *
 * @param platform
 */
export function getPlatformStructureUser(platform: string): IPlatformStructureUser {
    switch(platform) {
        case 'instagram':
            return platformStructure[platform].user
        default:
            throw Error('No platform provided')
    }
}

/**
 * Extract username from id
 *
 * @param id
 */
export function extractUsernameFromUserId(id: string) {
    return id.split('/').pop()
}

/**
 * Return platform from user path
 *
 * @param userPath
 */
export function getPlatformFromUserPath(userPath: string): string {
    const explodedUserPath: string[] = userPath.split('/')

    const platform = explodedUserPath.shift()

    if (!platform) {
        throw Error('Unable to get the platform from user path')
    }

    return platform
}