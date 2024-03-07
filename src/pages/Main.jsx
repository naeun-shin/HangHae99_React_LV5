import React, { useEffect } from 'react';
import { getAuthAxios } from '../apis/authtokenApi';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import Button from '../components/buttons/Button';
import { ButtonBox, Container, FormSection } from '../styles/commonStyles';

const Main = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogoutClick = () => {
    cookies.remove('accessToken');
    navigate('/');
  };

  useEffect(() => {
    // 메인 페이지 정보를 불러오기
    getAuthAxios().catch((error) => {
      if (error.response.status === 401) {
        cookies.remove('accessToken');
        navigate('/');
        alert(error.response.data.message);
      }
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
