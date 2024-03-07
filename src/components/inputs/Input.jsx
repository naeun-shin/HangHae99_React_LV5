import StyledInput from './Input.module';

const Input = ({ placeholder, type, value, onChange, autocomlete }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      autocomlete={autocomlete}
    />
  );
};

export default Input;
