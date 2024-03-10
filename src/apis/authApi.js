import { authInstance } from './axios';

// Interceptor 설정
authInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 여기서 에러 처리를 수행합니다.
    if (error.response) {
      // 서버에서 응답을 받았으나 상태 코드가 실패인 경우
      const { status, data } = error.response;
      return Promise.reject({ status, message: data.message });
    } else if (error.request) {
      // 요청을 보냈으나 응답이 없는 경우
      return Promise.reject({
        status: 500,
        message: '서버에서 응답을 받지 못했습니다.',
      });
    } else {
      // 요청을 보내기 전에 발생한 오류
      return Promise.reject({
        status: 400,
        message: '요청을 보내는 중 오류가 발생했습니다.',
      });
    }
  }
);
