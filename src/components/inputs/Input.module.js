import styled from 'styled-components';

const StyledInput = styled.input`
  box-sizing: border-box;
  height: 46px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 0px 12px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.color.blue};
`;

export default StyledInput;
