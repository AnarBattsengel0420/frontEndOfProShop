import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="m-3">
      AuthLayoutssss
      <Outlet />
    </div>
  );
};

export default AuthLayout;
