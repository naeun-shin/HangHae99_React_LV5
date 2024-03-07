import instance from './api';

export const login = async (id, password) => {
  const result = await instance
    .post('/login', {
      id,
      password,
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
  return result;
};
