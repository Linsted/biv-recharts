import { Card, Title } from "@mantine/core";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

// Example data for grouped bar chart
const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

export const HorizontalGroupedBarChartWidget = () => (
  <Card shadow="sm" padding="md" radius="md" withBorder>
    <Title order={5} mb="sm">
      Horizontal Grouped Bar Chart
    </Title>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 16, right: 16, left: 16, bottom: 16 }}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#8884d8" name="UV" />
        <Bar dataKey="pv" fill="#82ca9d" name="PV" />
      </BarChart>
    </ResponsiveContainer>
  </Card>
);
