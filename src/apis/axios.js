// import { Cookies } from 'react-cookie';
// import instance from './api';
import axios from 'axios';

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const todoInstance = axios.create({
  baseURL: process.env.REACT_APP_TODO_LIST_URL,
});
