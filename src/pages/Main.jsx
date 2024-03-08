import React, { useEffect } from 'react';
import { getAuthAxios } from '../apis/authtokenApi';
import { useNavigate } from 'react-router-dom';
// import { Cookies } from 'react-cookie';
import Button from '../components/buttons/Button';
import { ButtonBox, Container, FormSection } from '../styles/commonStyles';
import { removeCookie } from '../utils/CookieUtil';

const Main = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    removeCookie('accessToken');
    navigate('/');
  };

  useEffect(() => {
    // 메인 페이지 정보를 불러오기
    getAuthAxios().catch(() => {
      removeCookie('accessToken');
      navigate('/');
    });
  }, [navigate]);

  return (
    <>
      <Container>
        <FormSection>
          <div>TODOLIST!!!!!!!!!</div>
          <ButtonBox>
            <Button onClick={handleLogoutClick} text={'로그아웃'}></Button>
          </ButtonBox>
        </FormSection>
      </Container>
    </>
  );
};

export default Main;
