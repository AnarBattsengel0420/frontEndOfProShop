import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          components: {},
        }}
      ></ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
