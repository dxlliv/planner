import plannerConfig from "~/planner.config"

export function usePlannerConfig(): IRawConfig {
  return {
    project: {
      links: {
        docs: "https://dxlliv.github.io/planner/docs/",
        source: "https://github.com/dxlliv/planner",
        support: "https://patreon.com/dxlliv",
        deluxe: "https://dxlliv.dev/#planner",
      }
    },
    ...plannerConfig
  }
}
