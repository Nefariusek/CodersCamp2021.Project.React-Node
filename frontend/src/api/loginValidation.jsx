const loginValidation = (username, password, setUsernameError, setPasswordError, setLoginStatus) => {
  setUsernameError(false);
  setPasswordError(false);
  setLoginStatus(false);

  if (username && password) {
    setLoginStatus(true);
    alert('Login is successful');
  } else {
    if (!username) {
      setUsernameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
  }
};

export default loginValidation;
