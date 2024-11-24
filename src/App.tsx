import { ConfigProvider } from "antd";
import AuthProvider from "context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#212e42",
              colorLink: "#1890ff",
            },
            components: {},
          }}
        >
          <MainRoutes />
        </ConfigProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
