import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// const todoInstance = axios.create({
//   baseURL: process.env.TODO_LIST_SERVER_URL,
// });

export default instance;
