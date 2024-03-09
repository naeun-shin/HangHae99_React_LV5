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
    try {
      const response = await axios.post('http://localhost:3001/todo', todos);
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch data from the server.');
    }
  }
);

export const __removeTodo = createAsyncThunk('todos/removeTodo', async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/todo/${id}`);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch data from the server.');
  }
});

export const __isDoneTodo = createAsyncThunk(
  'todos/isDoneTodo',
  async ({ id, isDone }) => {
    try {
      const response = await axios.patch(`http://localhost:3001/todo/${id}`, {
        isDone,
      });
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch data from the server.');
    }
  }
);

export const __updateTodoContent = createAsyncThunk(
  'todo/updateTodoContent',
  async ({ todoId, content }) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/todo/${todoId}`,
        {
          content,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch data from the server.');
    }
  }
);

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getTodoList
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
      // addTodoList
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
      })
      // removeTodo
      .addCase(__removeTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(__removeTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload.id
        );
      })
      .addCase(__removeTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // isDoneTodo
      .addCase(__isDoneTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(__isDoneTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { id, isDone } = action.payload;
        console.log(action.payload);
        state.todos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, isDone } : todo
        );
      })
      .addCase(__isDoneTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // __updateTodoContent
      .addCase(__updateTodoContent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(__updateTodoContent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedTodo = action.payload; // 변경된 todo 항목
        const existingTodoIndex = state.todos.findIndex(
          (todo) => todo.id === updatedTodo.id
        );

        if (existingTodoIndex !== -1) {
          // 기존의 todo 항목을 찾았을 경우, 해당 항목을 업데이트
          state.todos[existingTodoIndex] = updatedTodo;
        } else {
          // 기존의 todo 항목이 없는 경우, 새로 추가
          state.todos.push(updatedTodo);
        }
      })
      .addCase(__updateTodoContent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default todoSlice;
