import { lazy } from "react";

const DashboardPage = lazy(() => import("pages/dashboard/dashboard"));

export const dashboardRoutes = [
  {
    key: "dashboard",
    path: "dashboard",
    element: <DashboardPage />,
  },
];
