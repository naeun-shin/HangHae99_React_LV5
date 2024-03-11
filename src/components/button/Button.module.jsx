import styled from 'styled-components';

// 추가 버튼
const StyledButton = styled.button`
  cursor: pointer;
  width: 150px;
  padding: 15px 10px;
  margin: 5px;

  font-size: 14px;
  font-weight: bold;

  background-color: ${(props) => props.theme.color.lightBlue};
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.color.blue};
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export { StyledButton, ButtonBox };
