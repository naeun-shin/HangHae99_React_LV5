import React from 'react';
import { NavBar } from '../styles/commonStyles';
import Button from '../components/button/Button';
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

  const handleTodoListClick = () => {
    navigate('/todoMain');
  };
  return (
    <>
      <NavBar>
        <p>
          {cookie !== undefined ? (
            <Button onClick={handleTodoListClick} text={'My Todo List'} />
          ) : (
            <p>My Todo List</p>
          )}
        </p>
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
