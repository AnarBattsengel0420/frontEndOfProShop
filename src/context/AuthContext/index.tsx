import { createContext, useEffect, useReducer } from "react";
import {
  AuthActionTypes,
  AuthContextType,
  AuthProviderProps,
  ReducerType,
} from "./type";
import { PageLoading } from "@ant-design/pro-layout";
import { useRequest } from "ahooks";
import auth from "api/auth";
import { notification } from "antd";
import { useLocation, useParams } from "react-router-dom";

export const AuthContext = createContext<AuthContextType>([
  { authorized: false, init: false, user: null },
  () => {},
]);

const initialState = {
  authorized: false,
  init: false,
  user: null,
};

const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        authorized: true,
        user: action.payload,
        init: false,
      };
    case AuthActionTypes.INIT:
      return {
        ...state,
        init: action.payload,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        authorized: false,
        user: null,
        init: false,
      };
    default:
      return state;
  }
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const userInfo = useRequest(auth.info, {
    manual: true,
    onSuccess: (result) => {
      dispatch({
        type: AuthActionTypes.INIT,
        payload: true,
      });
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: result,
      });
    },
    onError: () => {
      notification.error({
        message: "Алдаа гарлаа",
        description: "Хэрэглэгчийн мэдээлэл авч чадахгүй байна",
      });
      dispatch({
        type: AuthActionTypes.INIT,
        payload: true,
      });
      dispatch({
        type: AuthActionTypes.LOGOUT,
        payload: null,
      });
      auth.removeToken();
    },
  });
  useEffect(() => {
    if (!location.pathname.includes("auth")) {
      userInfo.run();
    }
  }, []);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {state.init ? <PageLoading /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
