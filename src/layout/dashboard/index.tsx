import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div className="m-3">
      Dashboard Layout
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
