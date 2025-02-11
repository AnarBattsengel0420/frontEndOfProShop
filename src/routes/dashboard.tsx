import { lazy } from "react";

const DashboardPage = lazy(() => import("pages/dashboard/dashboard"));
const LavlahPage = lazy(() => import("pages/dashboard/lavlah"));
const TailanPage = lazy(() => import("pages/dashboard/tailan"));


export const dashboardRoutes = [
  {
    key: "dashboard",
    path: "dashboard",
    element: <DashboardPage />,
  },
  {
    key: "dashboard",
    path: "lavlah",
    element: <LavlahPage />,
  },
  {
    key: "dashboard",
    path: "tailan",
    element: <TailanPage />,
  },
];
