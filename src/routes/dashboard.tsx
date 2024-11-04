import { lazy } from "react";

const DashboardPage = lazy(() => import("pages/dashboard/dashboard"));
const UserPage = lazy(() => import("pages/dashboard/users"));

export const dashboardRoutes = [
  {
    key: "dashboard",
    path: "dashboard",
    element: <DashboardPage />,
  },
  {
    key: "users",
    path: "users",
    element: <UserPage />,
  },
];
