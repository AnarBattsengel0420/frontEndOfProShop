import http from "api";

namespace users {
  export const create = (body: any) =>
    http.post<any>("admin/users", {
      hasAuth: true,
      body,
    });

  export const get = (id: number) =>
    http.get<any>(`admin/users/${id}`, {
      hasAuth: true,
    });

  export const list = (params: any) =>
    http.get<any>("admin/users/list", {
      hasAuth: true,
      params,
    });

  export const update = (id: number, body: any) =>
    http.put<any>(`admin/users/${id}`, {
      hasAuth: true,
      body,
    });
}

export default users;
