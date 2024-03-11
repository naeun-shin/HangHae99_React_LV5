import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import { MainSection, Wrapper } from '../styles/commonStyles';
import { useDispatch } from 'react-redux';
import { __getAuthToken } from '../redux/modules/authSlice';
import withAuth from '../hoc/withAuth';

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
          <Button
            onClick={handleTodolistAddClick}
            text={'TodoList 추가하기'}
            bgcolor='lightYellow'
            borderColor='darkYellow'
          />
          <Button
            onClick={handleTodolistReadClick}
            text={'TodoList 목록보기'}
            bgcolor='lightYellow'
            borderColor='darkYellow'
          />
        </MainSection>
      </Wrapper>
    </>
  );
};

export default withAuth(Main, true);
