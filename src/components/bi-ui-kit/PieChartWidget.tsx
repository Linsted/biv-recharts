// src/components/bi-ui-kit/PieChartWidget.tsx
import { Loader, Text } from "@mantine/core";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface PieChartWidgetProps {
  title: string;
  isLoading: boolean;
  isError: boolean;
  data: { name: string; value: number }[];
  colors?: string[];
}

const defaultColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

export const PieChartWidget = ({
  title,
  isLoading,
  isError,
  data,
  colors = defaultColors,
}: PieChartWidgetProps) => {
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
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
