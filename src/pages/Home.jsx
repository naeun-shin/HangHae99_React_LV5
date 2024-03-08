import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { login } from '../apis/login';
import IsEmpty from '../utils/IsEmpty';
import Button from '../components/buttons/Button';
import Input from '../components/inputs/Input';
import {
  Container,
  FormSection,
  Title,
  TitleName,
  ButtonBox,
} from '../styles/commonStyles';
import { setCookie } from '../utils/CookieUtil';
import { jwtDecode } from 'jwt-decode';

const Home = () => {
  const navigate = useNavigate();

  const [id, handleIdChange] = useForm();
  const [password, handlePasswordChange] = useForm();

  //SECTION - 로그인 api
  const handleLoginclick = async () => {
    if (!IsEmpty({ id, password })) {
      // 아이디 또는 패스워드에 공백이 있는 경우
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    //SECTION - 로그인 통신
    await login(id, password)
      .then((response) => {
        const { token } = response.data;
        const { exp } = jwtDecode(token);
        setCookie('accessToken', token, { expires: exp });

        navigate('/main');
      })
      .catch(() => {
        return navigate(-1);
      });
  };
  //SECTION - 회원가입 버튼 핸들러
  const handleSignUpLinkTo = () => {
    navigate('/signUp');
  };

  return (
    <>
      <Container>
        <FormSection
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <TitleName>로그인하기</TitleName>
          <Title> 아이디 </Title>
          <Input
            placeholder='ID'
            type='text'
            value={id}
            onChange={handleIdChange}
            autocomlete='username'
          />
          <Title> 비밀번호 </Title>
          <Input
            placeholder='PWD'
            type='password'
            value={password}
            onChange={handlePasswordChange}
            autocomplete='current-password'
          />
          <ButtonBox>
            <Button onClick={handleLoginclick} text={'로그인'} />
            <br />
            <Button onClick={handleSignUpLinkTo} text={'회원가입하기'} />
          </ButtonBox>
        </FormSection>
      </Container>
    </>
  );
};

export default Home;
