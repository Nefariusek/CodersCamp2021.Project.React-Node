const loginValidation = (username, password, setUsernameError, setPasswordError) => {
  setUsernameError(false);
  setPasswordError(false);

  if (username && password) {
    console.log(username, password);
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
