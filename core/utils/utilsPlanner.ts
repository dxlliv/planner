// @ts-ignore
import plannerConfig from "~/planner.config"

export function isPlannerFeatureEnabled(feature: string) {
  return plannerConfig.features[feature]
}