import { Route, Routes } from "react-router-dom";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route key={"root"} path="*" element={<div>Hello</div>} />
    </Routes>
  );
};

export default MainRoutes;
