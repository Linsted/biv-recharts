// src/hooks/data-adapters/mock.adapter.ts

export interface VisualizationConfig {
  metricId: string;
  timePeriod: string; // e.g., 'LAST_7_DAYS', 'LAST_3_DAYS'
}

const salesData = [
  { name: "Day 1", sales: 4000, profit: 1200, region: "North", returns: 2 },
  { name: "Day 2", sales: 3000, profit: 900, region: "South", returns: 1 },
  { name: "Day 3", sales: 5000, profit: 2000, region: "East", returns: 3 },
  { name: "Day 4", sales: 4500, profit: 1500, region: "West", returns: 0 },
  { name: "Day 5", sales: 6000, profit: 2500, region: "North", returns: 2 },
  { name: "Day 6", sales: 5500, profit: 2100, region: "South", returns: 1 },
  { name: "Day 7", sales: 7000, profit: 3000, region: "East", returns: 4 },
];

const usersData = [
  { name: "Day 1", users: 120, active: 80 },
  { name: "Day 2", users: 150, active: 100 },
  { name: "Day 3", users: 110, active: 70 },
  { name: "Day 4", users: 180, active: 130 },
  { name: "Day 5", users: 210, active: 160 },
  { name: "Day 6", users: 190, active: 140 },
  { name: "Day 7", users: 230, active: 180 },
];

const regionShareData = [
  { name: "North", value: 35 },
  { name: "South", value: 25 },
  { name: "East", value: 20 },
  { name: "West", value: 20 },
];

// This function simulates a backend API call
export const fetchMockData = async (
  config: VisualizationConfig
): Promise<any[]> => {
  console.log("Fetching mock data with config:", config);

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (config.metricId === "regionShare") {
    return regionShareData;
  }

  const data = config.metricId === "sales" ? salesData : usersData;

  // Simulate filtering by time period
  if (config.timePeriod === "LAST_3_DAYS") {
    return data.slice(-3);
  }
  return data; // Default to all 7 days
};
