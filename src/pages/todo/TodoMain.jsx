import React from 'react';
import TodoListSection from '../../components/todo/TodoListSection';
import TodoAdd from '../todo/TodoAdd';

const TodoMain = () => {
  return (
    <>
      <TodoAdd />
      <br />
      <TodoListSection isDone={false} />
      <TodoListSection isDone={true} />
    </>
  );
};

export default TodoMain;
