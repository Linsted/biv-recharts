# BI Dashboard POC (Vite + React + TypeScript)

This is a simple Proof-of-Concept (POC) BI dashboard demonstrating a modular, decoupled architecture using:

- **Vite** for build tooling
- **React** with **TypeScript**
- **react-grid-layout** for dashboard layout
- **recharts** for charting
- **@tanstack/react-query** for data fetching
- **@mantine/core** for UI components

## Features
- Modular, decoupled UI components (independent of data source)
- Mock data adapter for demonstration
- Dynamic dashboard layout
- Simple metric switching (Sales/Users)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open** [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
src/
├── components/
│   └── bi-ui-kit/
│       ├── ChartWidget.tsx
│       └── DashboardGrid.tsx
├── hooks/
│   └── data-adapters/
│       ├── mock.adapter.ts
│       └── useVisualizationData.ts
├── App.tsx
└── main.tsx
```

## Customization
- To add new metrics or data sources, extend the mock adapter or add new adapters in `src/hooks/data-adapters/`.
- UI components are designed to be reusable and data-agnostic.

---

*This project is for demonstration purposes only.*
# biv-recharts
