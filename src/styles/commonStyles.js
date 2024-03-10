import styled from 'styled-components';

const Container = styled.div`
  display: block;
`;

// NavBar
const NavBar = styled.div`
  /* background-color: ${(props) => props.theme.color.darkBlue}; */
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
`;
const MainSection = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* background-color: ${(props) => props.theme.color.lightBlue}; */
  border-radius: 5px;
  gap: 25px;
  padding: 20px;
  margin-top: 100px;
`;
const FormSection = styled.form`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* background-color: ${(props) => props.theme.color.lightBlue}; */
  border-radius: 5px;
  gap: 25px;
  padding: 20px;
  margin-top: 100px;
`;

const FormTag = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const FormTitle = styled(FormTag)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
`;

export {
  Container,
  Wrapper,
  NavBar,
  MainSection,
  FormSection,
  FormTitle,
  FormTag,
};
