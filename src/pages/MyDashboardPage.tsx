// src/pages/MyDashboardPage.tsx
import { useState } from "react";
import { ChartWidget } from "../components/bi-ui-kit/ChartWidget";
import { DashboardGrid } from "../components/bi-ui-kit/DashboardGrid";
import { LineChartWidget } from "../components/bi-ui-kit/LineChartWidget";
import { PieChartWidget } from "../components/bi-ui-kit/PieChartWidget";
import { TimePeriodSelector } from "../components/filters/TimePeriodSelector";
import { useVisualizationData } from "../hooks/data-adapters/useVisualizationData";
import { HorizontalGroupedBarChartWidget } from "../components/bi-ui-kit/HorizontalGroupedBarChartWidget";

export const MyDashboardPage = () => {
  const [timePeriod, setTimePeriod] = useState("LAST_7_DAYS");

  const salesData = useVisualizationData({
    metricId: "sales",
    timePeriod,
  }).data;
  const usersData = useVisualizationData({
    metricId: "users",
    timePeriod,
  }).data;
  const profitData = useVisualizationData({
    metricId: "sales",
    timePeriod,
  }).data;
  const regionShareData = useVisualizationData({
    metricId: "regionShare",
    timePeriod,
  }).data;
  const returnsData = useVisualizationData({
    metricId: "returns",
    timePeriod,
  }).data;
  const profitMarginData = useVisualizationData({
    metricId: "profitMargin",
    timePeriod,
  }).data;
  const expensesData = useVisualizationData({
    metricId: "expenses",
    timePeriod,
  }).data;
  const conversionData = useVisualizationData({
    metricId: "conversion",
    timePeriod,
  }).data;
  const satisfactionData = useVisualizationData({
    metricId: "satisfaction",
    timePeriod,
  }).data;
  const churnData = useVisualizationData({
    metricId: "churn",
    timePeriod,
  }).data;
  const avgOrderValueData = useVisualizationData({
    metricId: "avgOrderValue",
    timePeriod,
  }).data;
  const newCustomersData = useVisualizationData({
    metricId: "newCustomers",
    timePeriod,
  }).data;
  //   const supportTicketsData = useVisualizationData({
  //     metricId: "supportTickets",
  //     timePeriod,
  //   }).data;

  return (
    <div
      style={{
        padding: "20px",
        width: "100%",
        maxWidth: "1800px",
        margin: "0 auto",
      }}
    >
      <h1>Dashboard with Global Filters</h1>
      <TimePeriodSelector value={timePeriod} onChange={setTimePeriod} />
      <hr />
      <DashboardGrid>
        <div key="sales-chart" className="dashboard-item">
          <ChartWidget
            title="Sales"
            isLoading={false}
            isError={false}
            data={salesData}
            dataKey="sales"
          />
        </div>
        <div key="users-chart" className="dashboard-item">
          <ChartWidget
            title="Users"
            isLoading={false}
            isError={false}
            data={usersData}
            dataKey="users"
          />
        </div>
        <div key="profit-line" className="dashboard-item">
          <LineChartWidget
            title="Profit Over Time"
            isLoading={false}
            isError={false}
            data={profitData}
            dataKey="profit"
          />
        </div>
        <div key="region-pie" className="dashboard-item">
          <PieChartWidget
            title="Region Share"
            isLoading={false}
            isError={false}
            data={regionShareData}
          />
        </div>
        <div key="returns-chart" className="dashboard-item">
          <ChartWidget
            title="Returns"
            isLoading={false}
            isError={false}
            data={returnsData}
            dataKey="returns"
          />
        </div>
        <div key="profit-margin-line" className="dashboard-item">
          <LineChartWidget
            title="Profit Margin"
            isLoading={false}
            isError={false}
            data={profitMarginData}
            dataKey="margin"
          />
        </div>
        <div key="expenses-chart" className="dashboard-item">
          <ChartWidget
            title="Expenses"
            isLoading={false}
            isError={false}
            data={expensesData}
            dataKey="expenses"
          />
        </div>
        <div key="conversion-line" className="dashboard-item">
          <LineChartWidget
            title="Conversion Rate"
            isLoading={false}
            isError={false}
            data={conversionData}
            dataKey="conversion"
          />
        </div>
        <div key="satisfaction-chart" className="dashboard-item">
          <ChartWidget
            title="Satisfaction"
            isLoading={false}
            isError={false}
            data={satisfactionData}
            dataKey="satisfaction"
          />
        </div>
        <div key="churn-line" className="dashboard-item">
          <LineChartWidget
            title="Churn Rate"
            isLoading={false}
            isError={false}
            data={churnData}
            dataKey="churn"
          />
        </div>
        <div key="avg-order-value-chart" className="dashboard-item">
          <ChartWidget
            title="Avg Order Value"
            isLoading={false}
            isError={false}
            data={avgOrderValueData}
            dataKey="avgOrderValue"
          />
        </div>
        <div key="new-customers-chart" className="dashboard-item">
          <ChartWidget
            title="New Customers"
            isLoading={false}
            isError={false}
            data={newCustomersData}
            dataKey="newCustomers"
          />
        </div>
        <div key="horizontal-grouped-bar-chart" className="dashboard-item">
          <HorizontalGroupedBarChartWidget />
        </div>
      </DashboardGrid>
    </div>
  );
};
