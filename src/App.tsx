import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          components: {},
        }}
      >
        <MainRoutes />
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
