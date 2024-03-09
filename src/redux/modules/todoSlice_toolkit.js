// import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

// const initialState = [
//   {
//     id: uuidv4(),
//     title: '리액트 배우기',
//     content: '리액트 배우기',
//     isDone: false,
//   },
//   {
//     id: uuidv4(),
//     title: 'Next.js 배우기',
//     content: 'Next.js 배우기',
//     isDone: true,
//   },
// ];

// const todoSlice = createSlice({
//   name: 'todo',
//   initialState: initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       return [...state, action.payload];
//     },
//     isDoneTodo: (state, action) => {
//       const { id, isDone } = action.payload;
//       const todo = state.find((todo) => todo.id === id);
//       if (todo) {
//         todo.isDone = isDone;
//       }
//     },
//     cancelTodo: (state, action) => {
//       const { id, isDone } = action.payload;
//       const todo = state.find((todo) => todo.id === id);
//       if (todo) {
//         todo.isDone = isDone;
//       }
//     },
//     removeTodo: (state, action) => {
//       console.log(action);
//       return state.filter((todo) => todo.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, isDoneTodo, cancelTodo, removeTodo } =
//   todoSlice.actions;
// export default todoSlice.reducer;
