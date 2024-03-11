import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const withAuth = (SpecialComponent, option) => {
  const AuthenticationCheck = () => {
    const navigate = useNavigate();
    const [cookies] = useCookies(['accessToken']);
    const isLogedIn = cookies.accessToken;
    useEffect(() => {
      if (!isLogedIn && option) {
        alert('로그인이 필요합니다.');
        navigate('/');
      } else if (isLogedIn && !option) {
        navigate('/main');
      }
    }, [navigate, isLogedIn]);
    return <SpecialComponent />;
  };
  return AuthenticationCheck;
};

export default withAuth;
