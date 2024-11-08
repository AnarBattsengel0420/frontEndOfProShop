import { createContext, useEffect, useReducer } from "react";
import {
  AuthActionTypes,
  AuthContextType,
  AuthProviderProps,
  ReducerType,
} from "./type";
import { PageLoading } from "@ant-design/pro-layout";

export const AuthContext = createContext<AuthContextType>([
  { authorized: true, init: false, user: null },
  () => {},
]);

const initialState = {
  authorized: true,
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
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({ type: AuthActionTypes.LOGIN, payload: JSON.parse(user) });
      dispatch({ type: AuthActionTypes.INIT, payload: JSON.parse(user) });
    }
  }, []);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {!state.init ? <PageLoading /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
