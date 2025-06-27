export interface ApiResponse<T> {
  status:'ok' | 'fail';
  message: string;
  statusCode?: number;
  data?: T;
  actions?:{[key:string]: string}; // Optional for actions
}