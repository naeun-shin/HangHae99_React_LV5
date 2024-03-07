// import { Cookies } from 'react-cookie';
import instance from './api';
import { getCookie } from '../utils/CookieUtil';

//SECTION -  authtoken 인증 파트
// const cookies = new Cookies();
export const getAuthAxios = async () => {
  const accessToken = getCookie('accessToken');
  try {
    const result = instance.get('/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return result;
  } catch (error) {
    if (error.response.status === 401) {
      alert(error.response.data.message);
    }
  }
};
