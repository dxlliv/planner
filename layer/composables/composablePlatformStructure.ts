import {configPlatformStructure} from "../core/config/configPlatformStructure"

export function usePlatformStructure(platform: IPlatforms) {
  return configPlatformStructure[platform]
}
