// src/components/bi-ui-kit/LineChartWidget.tsx
import { Loader, Text } from "@mantine/core";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface LineChartWidgetProps {
  title: string;
  isLoading: boolean;
  isError: boolean;
  data: any[];
  dataKey: string;
}

export const LineChartWidget = ({
  title,
  isLoading,
  isError,
  data,
  dataKey,
}: LineChartWidgetProps) => {
  if (isLoading) {
    return (
      <div>
        <Loader /> <Text>Loading "{title}"...</Text>
      </div>
    );
  }

  if (isError) {
    return <Text color="red">Could not load data for "{title}".</Text>;
  }

  if (!data || data.length === 0) {
    return <Text>No data to display for "{title}".</Text>;
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
