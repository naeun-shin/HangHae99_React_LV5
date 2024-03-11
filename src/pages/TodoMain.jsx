import React from 'react';
import TodoListSection from '../components/todo/TodoListSection';
import withAuth from '../hoc/withAuth';

const TodoMain = () => {
  return (
    <>
      <TodoListSection isDone={false} />
      <TodoListSection isDone={true} />
    </>
  );
};

export default withAuth(TodoMain, true);
