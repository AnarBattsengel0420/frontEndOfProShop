export type AuthContextType = [DataType, React.Dispatch<any>];

export interface DataType {
  authorized: boolean;
  init: boolean;
  user: any;
}

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type ReducerType = (state: any, action: any) => any;

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  INIT = "INIT",
}
