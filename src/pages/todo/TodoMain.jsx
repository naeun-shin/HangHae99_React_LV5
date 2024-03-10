import React from 'react';
import TodoListSection from '../../components/todo/TodoListSection';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const TodoMain = () => {
  const naviagte = useNavigate();
  const handleTodolistAddClick = () => {
    naviagte('/todoAdd');
  };
  return (
    <>
      <Button onClick={handleTodolistAddClick} text={'TodoList 추가하기'} />
      <TodoListSection isDone={false} />
      <TodoListSection isDone={true} />
    </>
  );
};

export default TodoMain;
