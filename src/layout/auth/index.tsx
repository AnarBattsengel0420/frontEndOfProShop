import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url("/background/login.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Outlet />
      <div className="fixed bottom-10 text-white md:text-xl text-base text-center">
        @{new Date().getFullYear()} Зохиогчийн эрх хуулиар хамгаалагдсан
      </div>
    </div>
  );
};

export default AuthLayout;
