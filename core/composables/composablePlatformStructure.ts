import {configPlatformStructure} from "../lib/config/configPlatformStructure"

export function usePlatformStructure(platform: IUserPlatform) {
  return configPlatformStructure[platform]
}
