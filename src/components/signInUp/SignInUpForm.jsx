import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import IsEmpty from '../../utils/IsEmpty';
import {
  FormSection,
  FormTitle,
  FormTag,
  Wrapper,
} from '../../styles/commonStyles';
import { useDispatch } from 'react-redux';
import { __login, __registerUser } from '../../redux/modules/authSlice';
import Button from '../../components/button/Button';
import StyledInput from '../../components/inputs/Input.module';

const SignInUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, handleIdChange] = useForm();
  const [password, handlePasswordChange] = useForm();
  const [isLogedIn, setIsLogedIn] = useState(true);

  //SECTION - 로그인 api
  const handleSignUpOrInclick = async () => {
    if (!IsEmpty({ id, password })) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    const userInfo = {
      id,
      password,
    };

    if (isLogedIn) {
      //SECTION - 로그인
      dispatch(__login(userInfo));
      navigate('/main');
    } else {
      //SECTION - 회원가입
      dispatch(__registerUser(userInfo));
      handleChangeSignState();
    }
  };
  // 로그인 or 회원가입
  const handleChangeSignState = () => {
    !isLogedIn ? setIsLogedIn(true) : setIsLogedIn(false);
  };

  return (
    <>
      <Wrapper>
        <FormSection
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {isLogedIn ? (
            <FormTag>로그인하기</FormTag>
          ) : (
            <FormTag>회원가입하기</FormTag>
          )}
          <FormTitle> 아이디 </FormTitle>
          <StyledInput
            placeholder='ID'
            type='text'
            value={id}
            onChange={handleIdChange}
            autocomlete='username'
          />
          <FormTitle> 비밀번호 </FormTitle>
          <StyledInput
            placeholder='PWD'
            type='password'
            value={password}
            onChange={handlePasswordChange}
            autocomplete='current-password'
          />
          {isLogedIn ? (
            <>
              <Button onClick={handleSignUpOrInclick} text={'로그인'} />
              <br />
              <Button
                onClick={handleChangeSignState}
                text={'회원가입하러가기'}
              />
            </>
          ) : (
            <>
              <Button onClick={handleSignUpOrInclick} text={'회원가입'} />
              <br />
              <Button onClick={handleChangeSignState} text={'로그인하러가기'} />
            </>
          )}
        </FormSection>
      </Wrapper>
    </>
  );
};

export default SignInUpForm;
