// src/pages/MyDashboardPage.tsx
import { useState } from "react";
import { ChartWidget } from "../components/bi-ui-kit/ChartWidget";
import { DashboardGrid } from "../components/bi-ui-kit/DashboardGrid";
import { LineChartWidget } from "../components/bi-ui-kit/LineChartWidget";
import { PieChartWidget } from "../components/bi-ui-kit/PieChartWidget";
import { TimePeriodSelector } from "../components/filters/TimePeriodSelector";
import { useVisualizationData } from "../hooks/data-adapters/useVisualizationData";

export const MyDashboardPage = () => {
  // Dashboard-level filters state
  const [timePeriod, setTimePeriod] = useState("LAST_7_DAYS");

  // Data Fetching for Tile 1 (Sales)
  const salesConfig = { metricId: "sales", timePeriod };
  const {
    data: salesData,
    isLoading: isSalesLoading,
    isError: isSalesError,
  } = useVisualizationData(salesConfig);

  // Data Fetching for Tile 2 (Users)
  const usersConfig = { metricId: "users", timePeriod };
  const {
    data: usersData,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useVisualizationData(usersConfig);

  // Data Fetching for Tile 3 (Profit Line)
  const profitData = Array.isArray(salesData) ? salesData : [];

  // Data Fetching for Tile 4 (Region Share Pie)
  const regionShareConfig = { metricId: "regionShare", timePeriod };
  const {
    data: regionShareData,
    isLoading: isRegionLoading,
    isError: isRegionError,
  } = useVisualizationData(regionShareConfig);

  // Layout Definition
  const layout = [
    { i: "sales-chart", x: 0, y: 0, w: 6, h: 4, isResizable: false },
    { i: "users-chart", x: 6, y: 0, w: 6, h: 4, isResizable: false },
    { i: "profit-line", x: 0, y: 4, w: 6, h: 4, isResizable: false },
    { i: "region-pie", x: 6, y: 4, w: 6, h: 4, isResizable: false },
  ];

  return (
    <div
      style={{
        padding: "20px",
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        minWidth: "100vw",
        boxSizing: "border-box",
      }}
    >
      <h1>Dashboard with Global Filters</h1>
      <TimePeriodSelector value={timePeriod} onChange={setTimePeriod} />
      <hr />
      <DashboardGrid layout={layout}>
        <div key="sales-chart" className="dashboard-item">
          <ChartWidget
            title="Sales"
            isLoading={isSalesLoading}
            isError={isSalesError}
            data={salesData}
            dataKey="sales"
          />
        </div>
        <div key="users-chart" className="dashboard-item">
          <ChartWidget
            title="Users"
            isLoading={isUsersLoading}
            isError={isUsersError}
            data={usersData}
            dataKey="users"
          />
        </div>
        <div key="profit-line" className="dashboard-item">
          <LineChartWidget
            title="Profit Over Time"
            isLoading={isSalesLoading}
            isError={isSalesError}
            data={profitData}
            dataKey="profit"
          />
        </div>
        <div key="region-pie" className="dashboard-item">
          <PieChartWidget
            title="Region Share"
            isLoading={isRegionLoading}
            isError={isRegionError}
            data={Array.isArray(regionShareData) ? regionShareData : []}
          />
        </div>
      </DashboardGrid>
    </div>
  );
};
