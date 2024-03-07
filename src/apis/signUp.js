import instance from './api';

export const signUp = async (id, password) => {
  const result = await instance
    .post('/register', {
      id,
      password,
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
  return result;
};
