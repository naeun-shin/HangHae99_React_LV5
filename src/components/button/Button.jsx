import React from 'react';
import { StyledButton } from '../../styles/componentStyles';

const Button = ({ onClick, text, buttontype }) => {
  return (
    <StyledButton onClick={onClick} text={text} buttontype={buttontype}>
      {text}
    </StyledButton>
  );
};

export default Button;
