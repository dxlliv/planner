import {configPlatformStructure} from "../lib/config/configPlatformStructure"

export function usePlatformStructure(platform: IPlatforms) {
  return configPlatformStructure[platform]
}
