export interface BaseResponse<T> {
  message: string;
  body: T;
}

export interface PaginationResponse<T> {
  total: number;
  items: Array<T>;
}
