import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="m-3">
      AuthLayout
      <Outlet />
    </div>
  );
};

export default AuthLayout;
