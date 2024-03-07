import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import IsEmpty from '../utils/IsEmpty';
import { signUp } from '../apis/signUp';
import Button from '../components/buttons/Button';
import Input from '../components/inputs/Input';
import {
  Container,
  FormSection,
  Title,
  TitleName,
  ButtonBox,
} from '../styles/commonStyles';

const SignUp = () => {
  const [id, handleIdChange] = useForm();
  const [password, handlePasswordChange] = useForm();

  const navigate = useNavigate();

  const handleSignUpclick = async () => {
    if (!IsEmpty({ id, password })) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    return await signUp(id, password).then(() => {
      handleLoginLinkTo();
    });
  };

  const handleLoginLinkTo = () => {
    navigate('/');
  };

  return (
    <>
      <Container>
        <FormSection
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <TitleName>회원가입하기</TitleName>
          <Title> 아이디 </Title>
          <Input
            placeholder='ID'
            type='text'
            value={id}
            onChange={handleIdChange}
            autoComplete='username'
          />

          <Title> 비밀번호 </Title>
          <Input
            placeholder='PWD'
            type='password'
            value={password}
            onChange={handlePasswordChange}
            autoComplete='current-password'
          />
          <ButtonBox>
            <Button onClick={handleSignUpclick} text={'회원가입'} />
            <br />
            <Button onClick={handleLoginLinkTo} text={'로그인하기'} />
          </ButtonBox>
        </FormSection>
      </Container>
    </>
  );
};

export default SignUp;
