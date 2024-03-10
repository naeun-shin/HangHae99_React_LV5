import styled from 'styled-components';

// 추가 버튼
const StyledButton = styled.button`
  cursor: pointer;
  width: 150px;

  padding: 15px;
  margin: 10px;
  margin-left: auto;

  font-size: 14px;
  font-weight: bold;

  background-color: ${(props) => {
    return props.buttontype === 'add'
      ? props.theme.color.darkGreen
      : 'transparent';
  }};
  color: ${(props) => {
    return props.buttontype === 'add'
      ? props.theme.color.white
      : props.theme.color.black;
  }};

  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  border-color: ${(props) => {
    if (props.buttontype === 'cancel' || props.buttontype === 'complete')
      return props.theme.color.darkGreen;
    else if (props.buttontype === 'remove') return props.theme.color.red;
    else if (props.buttontype === 'goBack') return props.theme.color.ligtGrey;
    else return 'transparent';
  }};
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export { StyledButton, ButtonBox };
