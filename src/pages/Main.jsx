import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import { MainSection, Wrapper } from '../styles/commonStyles';
import { useDispatch } from 'react-redux';
import { __getAuthToken } from '../redux/modules/authSlice';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // 메인 페이지 정보를 불러오기
    dispatch(__getAuthToken);
  }, [navigate]);

  const handleTodolistAddClick = () => {
    navigate('/todoAdd');
  };
  const handleTodolistReadClick = () => {
    navigate('/todoMain');
  };
  return (
    <>
      <Wrapper>
        <MainSection>
          <Button onClick={handleTodolistAddClick} text={'TodoList 추가하기'} />
          <Button
            onClick={handleTodolistReadClick}
            text={'TodoList 목록보기'}
          />
        </MainSection>
      </Wrapper>
    </>
  );
};

export default Main;
