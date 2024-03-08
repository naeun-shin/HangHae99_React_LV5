import React from 'react';
import { useDispatch } from 'react-redux';

import {
  removeTodo,
  isDoneTodo,
  cancelTodo,
} from '../../redux/modules/todoSlice';
import ButtonFunction from '../button/ButtonFunction';

import {
  WorkingComponentSytle,
  StyledLink,
} from '../../styles/componentStyles';

const TodoContent = ({ todo }) => {
  const dispatch = useDispatch();

  // 삭제
  const handleListRemoveClick = (id) => {
    dispatch(removeTodo(id));
  };

  // 완료 이동
  const handleListMoveDoneClick = (id) => {
    dispatch(isDoneTodo({ id, isDone: true }));
  };

  // 취소
  const handleDoneListCancelClick = (id) => {
    dispatch(cancelTodo({ id, isDone: false }));
  };

  return (
    <>
      <WorkingComponentSytle>
        <StyledLink to={`/todoDetail/${todo.id}`}>상세보기</StyledLink>
        <h3>{todo.title}</h3>
        <p>{todo.content}</p>
        <ButtonFunction
          isDone={todo.isDone}
          handleListRemoveClick={handleListRemoveClick}
          handleListMoveDoneClick={handleListMoveDoneClick}
          handleDoneListCancelClick={handleDoneListCancelClick}
          itemId={todo.id}
        />
      </WorkingComponentSytle>
    </>
  );
};
export default TodoContent;
