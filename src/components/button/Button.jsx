import React from 'react';
import { StyledButton } from './Button.module';

const Button = ({ onClick, text, buttontype, color, size }) => {
  return (
    <StyledButton
      onClick={onClick}
      text={text}
      buttontype={buttontype}
      color={color}
      size={size}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
