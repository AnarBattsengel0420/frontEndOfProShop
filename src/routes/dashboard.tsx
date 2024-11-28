import { lazy } from "react";

const DashboardPage = lazy(() => import("pages/dashboard/dashboard"));
const UserPage = lazy(() => import("pages/dashboard/users"));
const SettingsPage = lazy(() => import("pages/dashboard/settings"));

const NewsOrganizationsPage = lazy(
  () => import("pages/dashboard/news_organizations")
);

const NewsRequestsPage = lazy(
  () => import("pages/dashboard/news_page_requests")
);

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
  {
    key: "organizations",
    path: "organizations",
    element: <NewsOrganizationsPage />,
  },
  {
    key: "news-requests",
    path: "news-requests",
    element: <NewsRequestsPage />,
  },
];
