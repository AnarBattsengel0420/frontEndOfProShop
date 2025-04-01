import ProForm, { ProFormText } from "@ant-design/pro-form";
import { useRequest } from "ahooks";
import { Button, Card, Checkbox, notification } from "antd";
import auth from "api/auth";
import { LoginData, LoginResponse } from "api/auth/type";
import { AuthContext } from "context/AuthContext";
import { AuthActionTypes } from "context/AuthContext/type";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen01 } from "untitledui-js-base";

const AuthPage: React.FC = () => {
  const [user, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  const login = useRequest(auth.login, {
    manual: true,
    onSuccess: (result: LoginResponse) => {
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: result?.user,
      });

      auth.saveToken(result?.token);
      notification.success({
        message: "Амжилттай нэвтэрлээ",
        description: "Тавтай морилно уу",
      });
      navigate("dashboard/dashboard");
    },
    onError: (error) => {
      notification.error({
        message: "Алдаа гарлаа",
        description: error?.message,
      });
    },
  });
  return (
    <div className="2xl:w-1/4 lg:w-1/3 md:w-1/2 w-full mx-5 bg-white p-10 rounded-3xl bg-opacity-30">
      <div className="flex flex-col gap-5">
        <div className="flex children-center justify-center">
          <BookOpen01
            size="80"
            className="text-blue-800 p-4 rounded-full border-2 border-solid border-blue-800 "
          />
        </div>
        <ProForm
          submitter={{
            render: (_) => {
              return (
                <div className="mt-5">
                  <Button
                    loading={login.loading}
                    type="primary"
                    htmlType="submit"
                    className="w-full"
                    size="large"
                  >
                    Нэвтрэх
                  </Button>
                </div>
              );
            },
          }}
          onFinish={async (values: LoginData) => {
            const body = {
              email: values.email.toLowerCase(),
              password: values.password,
            };
            await login.runAsync(body);
          }}
        >
          <ProFormText
            placeholder={"Цахим хаягаа оруулна уу"}
            rules={[
              {
                required: true,
                message: "Цахим хаягаа оруулна уу",
              },
              {
                type: "email",
                message: "Цахим хаяг буруу байна",
              },
            ]}
            label={
              <div className="text-gray-700 text-base font-medium ">
                Цахим хаяг
              </div>
            }
            name="email"
            fieldProps={{
              size: "large",
            }}
          />
          <ProFormText.Password
            placeholder={"Нууц үгээ оруулна уу"}
            rules={[
              {
                required: true,
                message: "Нууц үгээ оруулна уу",
              },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                message:
                  "Нууц үг 8-аас дээш урттай байх, том жижиг үсэгтэй байх, тоо агуулсан байх ёстой",
              },
            ]}
            label={
              <div className="text-gray-700 text-base font-medium ">
                Нууц үг
              </div>
            }
            name="password"
            fieldProps={{
              size: "large",
            }}
          />
          <Checkbox className="text-gray-700 text-base font-medium ">
            Намайг сануулаарай
          </Checkbox>
        </ProForm>
      </div>
    </div>
  );
};

export default AuthPage;
