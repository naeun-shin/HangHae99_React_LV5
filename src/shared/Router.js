import { CookiesProvider, useCookies } from 'react-cookie';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import TodoMain from '../pages/todo/TodoMain';
import TodoDetail from '../pages/todo/TodoDetail';
import Header from '../pages/Header';

const Router = () => {
  const [cookies] = useCookies(['accessToken']);
  const isLogedIn = !!cookies.accessToken;
  if (isLogedIn === false) {
    alert('로그인이 필요합니다.');
  }
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
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
            <Route path='/todoMain' element={<TodoMain />} />
            <Route path='todoDetail/:id' element={<TodoDetail />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CookiesProvider>
  );
};
export default Router;
