import styled from 'styled-components';

const Container = styled.div`
  display: block;
`;

// NavBar
const NavBar = styled.div`
  background-color: ${(props) => props.theme.color.lightBlue};
  border-radius: 5px;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LoginUserName = styled.div`
  margin-left: auto;
`;
const Wrapper = styled.div`
  display: grid;
  justify-content: center;
`;
const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-top: 100px;
  border: 2px solid ${(props) => props.theme.color.darkBlue};
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.lightBlue};
`;
const FormSection = styled.form`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.lightBeige};
  border-radius: 5px;
  gap: 10px;
  padding: 20px;
  margin-top: 100px;
`;

const FormTag = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
`;

const FormTitle = styled(FormTag)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  font-size: 15px;
`;

export {
  Container,
  Wrapper,
  LoginUserName,
  NavBar,
  MainSection,
  FormSection,
  FormTitle,
  FormTag,
};
