import React, { useEffect } from 'react';
import { getAuthAxios } from '../apis/authApi';
import { useNavigate } from 'react-router-dom';
// import { Cookies } from 'react-cookie';
import Button from '../components/buttons/Button';
import { ButtonBox, Container, FormSection } from '../styles/commonStyles';
import { removeCookie } from '../utils/CookieUtil';
import { useDispatch } from 'react-redux';
import { __getAuthToken } from '../redux/modules/authSlice';
// import Header from './Header';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // 메인 페이지 정보를 불러오기
    dispatch(__getAuthToken);
    // navigate('/todoMain');
  }, [navigate]);

  const handleLogoutClick = () => {
    removeCookie('accessToken');
    navigate('/');
  };
  
  const handleTodolistClick = () => {
    navigate('/todoMain');
  };
  return (
    <>
      <Container>
        <FormSection>
          <div>TODOLIST!!!!!!!!!</div>
          <ButtonBox>
            <Button onClick={handleTodolistClick} text={'TodoList 로 가기'} />
            <Button onClick={handleLogoutClick} text={'로그아웃'} />
          </ButtonBox>
        </FormSection>
      </Container>
    </>
  );
};

export default Main;
