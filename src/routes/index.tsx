import { AuthContext } from "context/AuthContext";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { dashboardRoutes } from "./dashboard";
import DashboardLayout from "layout/dashboard";
import AuthLayout from "layout/auth";
import { authRoutes } from "./auth";

const MainRoutes: React.FC = () => {
  const [user] = useContext(AuthContext);

  const routes = [
    {
      key: "dashboard",
      path: "/dashboard",
      element: <DashboardLayout />,
      children: dashboardRoutes,
    },
  ];

  if (!user) {
    routes.push({
      key: "auth",
      path: "/auth",
      element: <AuthLayout />,
      children: authRoutes,
    });
  }

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.key} path={route.path} element={route.element}>
          {}
        </Route>
      ))}
      <Route key={"root"} path="*" element={<div>Hello</div>} />
    </Routes>
  );
};

export default MainRoutes;
