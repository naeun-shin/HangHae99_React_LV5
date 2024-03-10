import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../modules/todoSlice';
import { authSlice } from '../modules/authSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
