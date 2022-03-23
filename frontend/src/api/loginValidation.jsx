const loginValidation = (username, password, setUsernameError, setPasswordError) => {
  setUsernameError(false);
  setPasswordError(false);

  if (!username) {
    setUsernameError(true);
  }
  if (!password) {
    setPasswordError(true);
  }
};

export default loginValidation;
