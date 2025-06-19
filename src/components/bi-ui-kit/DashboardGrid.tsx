// src/components/bi-ui-kit/DashboardGrid.tsx
import { Responsive, WidthProvider, type Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DashboardGridProps {
  layout: Layout[];
  children: React.ReactNode;
}

export const DashboardGrid = ({ layout, children }: DashboardGridProps) => {
  return (
    <div
      style={{
        width: "100%",
        minWidth: 1100,
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <ResponsiveGridLayout
        isResizable={false}
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
      >
        {children}
      </ResponsiveGridLayout>
    </div>
  );
};
