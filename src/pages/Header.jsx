import React, { useEffect, useState } from 'react';
import { NavBar, LoginUserName } from '../styles/commonStyles';
import Button from '../components/button/Button';
import { removeCookie } from '../utils/CookieUtil';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';

const Header = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(['accessToken']);
  const cookie = cookies.accessToken;
  const [userName, setUserName] = useState('');

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

  const handleTodolistAddClick = () => {
    navigate('/todoAdd');
  };

  useEffect(() => {
    if (cookie !== undefined) {
      const decodedToken = jwtDecode(cookie);
      const { id } = decodedToken;
      setUserName(id);
    }
  }, [cookie]);

  return (
    <>
      <NavBar>
        <p>
          {cookie !== undefined ? (
            <>
              <Button
                onClick={handleTodoListClick}
                text={'My Todo List'}
                bgColor='lightBlue'
                borderColor='lightBlue'
              />
              <Button
                onClick={handleTodolistAddClick}
                text={'TodoList 추가하기'}
                bgColor='lightBlue'
                borderColor='lightBlue'
              />
            </>
          ) : (
            <Button
              text={'My Todo List'}
              bgColor='lightBlue'
              borderColor='lightBlue'
            />
          )}
        </p>
        {cookie !== undefined ? (
          <>
            <LoginUserName>{`${userName} 님`}</LoginUserName>{' '}
            {/* 아이디를 화면에 표시 */}
            <Button
              onClick={handleLogoutClick}
              text={'로그아웃'}
              bgColor='lightYellow'
              borderColor='darkYellow'
            />
          </>
        ) : null}
      </NavBar>
    </>
  );
};

export default Header;
