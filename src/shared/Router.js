import { CookiesProvider, useCookies } from 'react-cookie';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';

const Router = () => {
  const [cookies] = useCookies(['accessToken']);
  const isLogedIn = !!cookies.accessToken;
  if (isLogedIn === false) {
    alert('로그인이 필요합니다.');
  }
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={isLogedIn ? <Navigate to='/main ' /> : <Home />}
          />
          <Route
            path='/signUp'
            element={isLogedIn ? <Navigate to='/main ' /> : <SignUp />}
          />
          <Route
            path='/main'
            element={isLogedIn ? <Main /> : <Navigate to='/' />}
          />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};
export default Router;
