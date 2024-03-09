import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import todoInstance from '../../apis/todoApi';
import axios from 'axios';

export const __getTodoList = createAsyncThunk(
  // 1. actionValue
  'todos/getTodo',
  // 2. callback function
  async () => {
    try {
      const response = await axios.get('http://localhost:3001/todo');
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch data from the server.');
    }
  }
);

export const __addTodoList = createAsyncThunk(
  'todos/addTodo',
  async (todos) => {
    console.log(todos);
    try {
      const response = await axios.post('http://localhost:3001/todo', todos);
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch data from the server.');
    }
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getTodoList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(__getTodoList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(__getTodoList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(__addTodoList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(__addTodoList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = [...state.todos, action.payload];
      })
      .addCase(__addTodoList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default todoSlice;
