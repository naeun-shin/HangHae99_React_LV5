import styled from 'styled-components';

// 추가 버튼
const StyledButton = styled.button`
  cursor: pointer;
  width: 150px;
  padding: 15px 10px;
  margin: 5px;

  font-size: 14px;
  font-weight: bold;

  border-radius: 5px;

  border: 2px solid ${({ theme, borderColor }) => theme.color[borderColor]};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export { StyledButton, ButtonBox };
