import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const createApiInstance = (config: AxiosRequestConfig): AxiosInstance =>
  axios.create(config);
