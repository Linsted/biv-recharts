// src/hooks/data-adapters/mock.adapter.ts

export interface VisualizationConfig {
  metricId: string;
  timePeriod: string; // e.g., 'LAST_7_DAYS', 'LAST_3_DAYS'
}

const salesData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  sales: 3000 + Math.round(Math.random() * 5000),
  profit: 1000 + Math.round(Math.random() * 2000),
  region: ["North", "South", "East", "West"][i % 4],
  returns: Math.floor(Math.random() * 5),
}));

const usersData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  users: 100 + Math.round(Math.random() * 150),
  active: 60 + Math.round(Math.random() * 100),
}));

const regionShareData = [
  { name: "North", value: 35 },
  { name: "South", value: 25 },
  { name: "East", value: 20 },
  { name: "West", value: 20 },
];

const returnsData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  returns: Math.floor(Math.random() * 5),
}));

const profitMarginData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  margin: 10 + Math.random() * 20,
}));

const expensesData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  expenses: 2000 + Math.round(Math.random() * 2000),
}));

const conversionData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  conversion: 0.1 + Math.random() * 0.2,
}));

const satisfactionData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  satisfaction: 70 + Math.round(Math.random() * 30),
}));

const churnData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  churn: Math.random() * 0.1,
}));

const avgOrderValueData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  avgOrderValue: 50 + Math.round(Math.random() * 100),
}));

const newCustomersData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  newCustomers: 10 + Math.round(Math.random() * 20),
}));

const supportTicketsData = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  tickets: 1 + Math.round(Math.random() * 10),
}));

// This function simulates a backend API call
export const fetchMockData = async (
  config: VisualizationConfig
): Promise<any[]> => {
  console.log("Fetching mock data with config:", config);

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (config.metricId === "returns") return returnsData;
  if (config.metricId === "profitMargin") return profitMarginData;
  if (config.metricId === "expenses") return expensesData;
  if (config.metricId === "conversion") return conversionData;
  if (config.metricId === "satisfaction") return satisfactionData;
  if (config.metricId === "churn") return churnData;
  if (config.metricId === "avgOrderValue") return avgOrderValueData;
  if (config.metricId === "newCustomers") return newCustomersData;
  if (config.metricId === "supportTickets") return supportTicketsData;
  if (config.metricId === "regionShare") return regionShareData;

  const data = config.metricId === "sales" ? salesData : usersData;

  // Simulate filtering by time period
  if (config.timePeriod === "LAST_3_DAYS") {
    return data.slice(-3);
  }
  return data; // Default to all 30 days
};
