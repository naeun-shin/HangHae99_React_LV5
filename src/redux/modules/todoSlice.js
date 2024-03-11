import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { todoInstance } from '../../apis/axios';

export const __getTodoList = createAsyncThunk(
  // 1. actionValue
  'todos/getTodo',
  // 2. callback function
  async () => {
    try {
      const response = await todoInstance.get('/todos');
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
      const response = await todoInstance.post('/todos', todos);
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch data from the server.');
    }
  }
);

export const __removeTodo = createAsyncThunk('todos/removeTodo', async (id) => {
  try {
    await todoInstance.delete(`/todos/${id}`);
    return id;
  } catch (error) {
    throw Error('Failed to fetch data from the server.');
  }
});

export const __isDoneTodo = createAsyncThunk(
  'todos/isDoneTodo',
  async ({ id, isDone }) => {
    try {
      const response = await todoInstance.patch(`/todos/${id}`, {
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
      const response = await todoInstance.patch(`/todos/${todoId}`, {
        content,
      });
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
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
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
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
      })
      .addCase(__updateTodoContent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default todoSlice;
