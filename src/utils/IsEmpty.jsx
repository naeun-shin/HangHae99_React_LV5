const IsEmpty = ({ id, password }) => {
  return id.trim() !== '' && password.trim() !== '';
};
export default IsEmpty;
