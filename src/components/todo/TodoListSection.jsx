//NOTE - false 인 경우엔 working 로딩 / true인 경우엔 done으로 로딩
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoContent from './TodoContent';
import { WorkingStyle, WorkingListStyle } from '../../styles/todoStyles';
import { __getTodoList } from '../../redux/modules/todoSlice';

const TodoListSection = ({ isDone }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodoList());
  }, [dispatch]);

  const todo = useSelector((state) => state.todos.todos);

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
