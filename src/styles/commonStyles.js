import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 페이지의 전체 높이를 차지하도록 설정 */
`;

const FormSection = styled.form`
  width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  border: 2px solid rgb(254, 83, 31);
  border-radius: 5px;
  gap: 50px;
  padding: 12px;
  margin: 15px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const TitleName = styled(Title)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export { Container, FormSection, Title, TitleName, ButtonBox };
