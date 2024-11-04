import { createContext, useEffect, useReducer } from "react";
import {
  AuthActionTypes,
  AuthContextType,
  AuthProviderProps,
  ReducerType,
} from "./type";

const AuthContext = createContext<AuthContextType>([
  { authorized: false, init: false, user: null },
  () => {},
]);

const initialState = {
  authorized: false,
  init: false,
  user: null,
};

const reducer: ReducerType = (state: any, action: any) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        authorized: true,
        init: true,
        user: action.payload,
      };
    case AuthActionTypes.LOGOUT:
      return {
        authorized: false,
        init: true,
        user: null,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        authorized: false,
        init: true,
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
      dispatch({ type: "LOGIN", payload: JSON.parse(user) });
    }
  }, []);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
