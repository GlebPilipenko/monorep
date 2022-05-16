import { REACT_APP_BASE_URL } from '@monorep/mob/envConfig';
import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || REACT_APP_BASE_URL,
});
