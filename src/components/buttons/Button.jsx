import React from 'react';
import StyledButton from './Button.module';

const Button = ({ onClick, text }) => {
  return (
    <StyledButton onClick={onClick} text={text}>
      {text}
    </StyledButton>
  );
};

export default Button;
