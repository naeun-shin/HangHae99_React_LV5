import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../pages/Main';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import TodoMain from '../pages/TodoMain';
import Header from '../pages/Header';
import { Container } from '../styles/commonStyles';
import TodoAdd from '../components/todo/TodoAdd';
import TodoDetail from '../components/todo/TodoDetail';

const Router = () => {
  // const [cookies] = useCookies(['accessToken']);
  // const isLogedIn = !!cookies.accessToken;
  // if (isLogedIn === false) {
  //   alert('로그인이 필요합니다.');
  // }
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/main' element={<Main />} />
              <Route path='/todoMain' element={<TodoMain />} />
              <Route path='/todoAdd' element={<TodoAdd />} />
              <Route path='/todoDetail/:id' element={<TodoDetail />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </CookiesProvider>
  );
};
export default Router;
