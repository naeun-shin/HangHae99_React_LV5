import React from 'react';
import { StyledButton } from './Button.module';

const Button = ({ onClick, text, bgcolor, bordercolor }) => {
  return (
    <StyledButton
      onClick={onClick}
      text={text}
      bgcolor={bgcolor}
      bordercolor={bordercolor}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
