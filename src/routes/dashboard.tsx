import { lazy } from "react";

const DashboardPage = lazy(() => import("pages/dashboard/dashboard"));
const UserPage = lazy(() => import("pages/dashboard/users"));
const SettingsPage = lazy(() => import("pages/dashboard/settings"));

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
  {
    key: "settings",
    path: "settings",
    element: <SettingsPage />,
  },
];
