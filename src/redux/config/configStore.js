import { configureStore } from '@reduxjs/toolkit';
import todo from '../modules/todoSlice';

const store = configureStore({
  reducer: {
    todo,
  },
});

export default store;
