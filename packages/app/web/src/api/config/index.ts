import { createApiInstance } from '@monorep/api-module';

export const apiConfig = createApiInstance({
  baseURL: process.env.REACT_APP_BASE_URL,
});
