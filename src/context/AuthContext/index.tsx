import { PageLoading } from "@ant-design/pro-layout";
import { useRequest } from "ahooks";
import auth from "api/auth";
import { createContext, useEffect, useReducer } from "react";
import {
  AuthActionTypes,
  AuthContextType,
  AuthProviderProps,
  ReducerType,
} from "./type";

export const AuthContext = createContext<AuthContextType>([
  { authorized: true, init: false, user: null },
  () => {},
]);

const initialState = {
  authorized: true,
  init: false,
  user: undefined,
};

const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        authorized: true,
        user: action.payload,
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
      };
    default:
      return state;
  }
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const userInfo = useRequest(auth.info, {
    manual: true,
    onSuccess: (result) => {
      dispatch({
        type: AuthActionTypes.LOGIN,
        payload: result,
      });
      dispatch({
        type: AuthActionTypes.INIT,
        payload: true,
      });
    },
    onError: () => {
      dispatch({
        type: AuthActionTypes.LOGOUT,
        payload: null,
      });
      dispatch({
        type: AuthActionTypes.INIT,
        payload: true,
      });
      auth.removeToken();
    },
  });

  useEffect(() => {
    userInfo.run();
  }, []);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {!state.init ? <PageLoading /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
