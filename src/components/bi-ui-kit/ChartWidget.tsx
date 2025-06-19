// src/components/bi-ui-kit/ChartWidget.tsx
import { Loader, Text } from "@mantine/core";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartWidgetProps {
  title: string;
  isLoading: boolean;
  isError: boolean;
  data: any[];
  dataKey: string; // e.g., 'sales' or 'users'
}

export const ChartWidget = ({
  title,
  isLoading,
  isError,
  data,
  dataKey,
}: ChartWidgetProps) => {
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
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
