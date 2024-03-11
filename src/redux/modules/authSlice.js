import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authInstance } from '../../apis/axios';
import { jwtDecode } from 'jwt-decode';
import { getCookie, setCookie } from '../../utils/CookieUtil';

// 회원 가입
export const __registerUser = createAsyncThunk(
  'auth/register',
  async (newUser) => {
    try {
      const { response } = await authInstance.post('/register', newUser);
      return response;
    } catch (error) {
      alert(error.response.data.message);
    }
  }
);

// 로그인
export const __login = createAsyncThunk('auth/login', async (userInfo) => {
  try {
    const { data } = await authInstance.post('/login', userInfo);
    const token = data.token;
    // 토큰을 해석하여 만료 시간을 가져옵니다.
    const decodedToken = jwtDecode(token);
    const expireTime = decodedToken.exp * 1000; // 밀리초 단위로 변환합니다.
    const currentTime = Date.now(); // 현재 시간을 가져옵니다.
    // 만료 시간과 현재 시간의 차이를 계산하여 유효시간을 설정합니다.
    const expiresIn = expireTime - currentTime;
    // 쿠키에 토큰 저장
    setCookie('accessToken', token, expiresIn);
    return data;
  } catch (error) {
    alert(error.response.data.message);
  }
});

export const __getAuthToken = createAsyncThunk(
  'auth/getAuthToken',
  async () => {
    try {
      const cookie = getCookie('accessToken');
      const response = await authInstance.get('/user', {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      });
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    error: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(__registerUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(__registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(__login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(__login.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(__login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(__getAuthToken.fulfilled, (state, action) => {
        // 토큰이 성공적으로 가져와진 경우에 대한 처리
        state.token = action.payload.token;
      })
      .addCase(__getAuthToken.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
