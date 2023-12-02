import {platformStructure} from "../core/structure";

export function getPlatformStructureUser(platform: string): IPlatformStructureUser {
    switch(platform) {
        case 'instagram':
            return platformStructure[platform].user
    }
}