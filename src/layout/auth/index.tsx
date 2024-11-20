import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="grid grid-cols-3">
      <div></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
