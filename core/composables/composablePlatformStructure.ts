import {configPlatformStructure} from "../models/config/configPlatformStructure"

export function usePlatformStructure(platform: IUserPlatform) {
  return configPlatformStructure[platform]
}
