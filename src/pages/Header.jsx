import React from 'react';
import { NavBar } from '../styles/componentStyles';
import Button from '../components/buttons/Button';
import { removeCookie } from '../utils/CookieUtil';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(['accessToken']);
  const cookie = cookies.accessToken;

  const handleLogoutClick = () => {
    removeCookie('accessToken');
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/');
  };
  return (
    <>
      <NavBar>
        <p>My Todo List</p>
        {/* <p>React</p> */}
        {cookie !== undefined ? (
          <Button onClick={handleLogoutClick} text={'로그아웃'} />
        ) : (
          <Button onClick={handleLoginClick} text={'로그인'} />
        )}
      </NavBar>
    </>
  );
};

export default Header;
