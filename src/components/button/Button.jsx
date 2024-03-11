import React from 'react';
import { StyledButton } from './Button.module';

const Button = ({ onClick, text, bgColor, borderColor }) => {
  return (
    <StyledButton
      onClick={onClick}
      text={text}
      bgColor={bgColor}
      borderColor={borderColor}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
