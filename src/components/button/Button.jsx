import React from 'react';
import { StyledButton } from './Button.module';

const Button = ({ onClick, text, color, size, border }) => {
  return (
    <StyledButton
      onClick={onClick}
      text={text}
      $color={color}
      $size={size}
      $border={border}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
