import {platformStructure} from "../core/structure";

export function getPlatformStructureUser(platform: string): IPlatformStructureUser {
    switch(platform) {
        case 'instagram':
            return platformStructure[platform].user
        default:
            throw Error('No platform provided')
    }
}

export function getUsernameFromPlatformUser(platformUser: string) {
    return platformUser.split('/').pop()
}

export function getPlatformFromPlatformUser(platformUser: string) {
    return platformUser.split('/').shift()
}