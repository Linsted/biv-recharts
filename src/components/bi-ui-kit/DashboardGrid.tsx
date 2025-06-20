// src/components/bi-ui-kit/DashboardGrid.tsx

interface DashboardGridProps {
  children: React.ReactNode;
}

export const DashboardGrid = ({ children }: DashboardGridProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        flexWrap: "wrap",
        width: "100%",
        minWidth: 1100,
        maxWidth: 1400,
        margin: "0 auto",
        gap: 24,
      }}
    >
      {Array.isArray(children)
        ? children.map((child, idx) => (
            <div
              key={idx}
              style={{ flex: `0 1 calc((100% - 48px) / 3)`, minWidth: 0 }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
};
