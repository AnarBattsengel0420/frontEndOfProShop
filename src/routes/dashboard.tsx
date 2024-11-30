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
const BlogCategoriesPage = lazy(
  () => import("pages/dashboard/blog_categories")
);
const BlogPage = lazy(() => import("pages/dashboard/blog"));

const BlogCreate = lazy(() => import("pages/dashboard/blog/action/create"));

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
  {
    key: "blog-categories",
    path: "blog-categories",
    element: <BlogCategoriesPage />,
  },
  {
    key: "blogs",
    path: "blogs",
    element: <BlogPage />,
  },
  {
    key: "blogs/create",
    path: "blogs/create",
    element: <BlogCreate />,
  },
];
