//NOTE - false 인 경우엔 working 로딩 / true인 경우엔 done으로 로딩
import React from 'react';
import { useSelector } from 'react-redux';
import TodoContent from './TodoContent';
import { WorkingStyle, WorkingListStyle } from '../../styles/componentStyles';

const TodoListSection = ({ isDone }) => {
  const todo = useSelector((state) => state.todo);
  const title = !isDone ? 'Working' : 'Done';
  return (
    <>
      {!isDone ? (
        <WorkingStyle>
          <h2>{title}</h2>
          <WorkingListStyle>
            {todo.map((item) => {
              return !item.isDone ? (
                <TodoContent todo={item} key={item.id} />
              ) : null;
            })}
          </WorkingListStyle>
        </WorkingStyle>
      ) : (
        <WorkingStyle>
          <h2>{title}</h2>
          <WorkingListStyle>
            {todo.map((item) => {
              return item.isDone ? (
                <TodoContent todo={item} key={item.id} />
              ) : null;
            })}
          </WorkingListStyle>
        </WorkingStyle>
      )}
    </>
  );
};

export default TodoListSection;
