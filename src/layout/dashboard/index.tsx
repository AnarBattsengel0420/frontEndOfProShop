import { Avatar, Layout, Menu } from "antd";
import auth from "api/auth";
import file from "api/file";
import { AuthContext } from "context/AuthContext";
import { AuthActionTypes } from "context/AuthContext/type";
import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen01, Logout01 } from "untitledui-js-base";
import menuData from "./menu";
import DateRangePicker from "utils/DateRangePicker";
import RealTimeClock from "utils/RealTime";

const { Header } = Layout;

const Logo = () => {
  return (
    <div>
      <BookOpen01 className="text-white" size="28" />
    </div>
  );
};

const Navbar: React.FC = () => {
  const [user, dispatch] = useContext(AuthContext);
  const location = useLocation();

  return (
    <Layout>
      <Header className="flex items-center bg-blue-600">
        <div className="flex items-center flex-1 gap-6">
          <Logo />
          <Menu
            theme="#0077F4"
            mode="horizontal"
            defaultSelectedKeys={[location.pathname]}
            className="flex-1"
          >
            {menuData.map((item) => (
              <Menu.Item key={item.path}>
                <Link
                  to={item.path as string}
                  className="text-gray-400 hover:text-white"
                  style={{ color: location.pathname === item.path ? 'white' : undefined }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                      position: "relative",
                    }}
                  >
                    <div className="text-md font-semibold">{item.name}</div>
                    {location.pathname === item.path && (
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          backgroundColor: "#F5F5F5",
                          position: "absolute",
                          bottom: "-5px",
                          transform: "rotate(45deg)",
                        }}
                      />
                    )}
                  </div>
                </Link>

              </Menu.Item>
            ))}
          </Menu>
        </div>
        <div className="flex items-center gap-4">       
          <div className="flex items-center gap-4"> 
            <RealTimeClock />
            <Avatar
              size={50}
              src={file.fileToUrl(user?.user?.profile?.physical_path)}
              className="uppercase"
            >
              {user?.user?.username?.substring(0, 2)}
            </Avatar>
            <div className="flex flex-col gap-2 ml-2">
              <div className="uppercase">{user?.user?.first_name}</div>
              <div>{user?.user?.phone}</div>
            </div>
            <Logout01
              color="#fff"
              className="cursor-pointer ml-5"
              onClick={() => {
                dispatch({ type: AuthActionTypes.LOGOUT });
                auth.removeToken();
              }}
            />
          </div>
        </div>
      </Header>
      <Layout>
        <div className="p-5">
          <Outlet />
        </div>
      </Layout>
    </Layout>
  );
};

export default Navbar;
