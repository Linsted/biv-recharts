// src/hooks/data-adapters/useVisualizationData.ts
import { useQuery } from "@tanstack/react-query";
import type { VisualizationConfig } from "./mock.adapter";
import { fetchMockData } from "./mock.adapter";

// This is the "Adapter Hook"
// For now, it's hardcoded to use the mock adapter.
// In a real app, it could use an environment variable to switch between
// fetchMockData, fetchFromNestJS, or fetchFromCube.
const fetcher = fetchMockData;

export const useVisualizationData = (config: VisualizationConfig) => {
  return useQuery({
    queryKey: ["visualizationData", config],
    queryFn: () => fetcher(config),
    placeholderData: (prev) => prev,
  });
};
