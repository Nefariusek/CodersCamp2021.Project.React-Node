export const UPDATE_FORM_STATE = 'UPDATE_FORM_STATE';

export const onInputChange = (name, value, formState, dispatch) => {
  const { hasError, errorText } = validateInput(name, value, formState);
  let isFormValid = true;

  for (const key in formState) {
    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && formState[key].hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATE_FORM_STATE,
    payload: { name, value, visited: false, hasError, errorText, isFormValid },
  });
};

export const onInputBlur = (name, value, formState, dispatch) => {
  const { hasError, errorText } = validateInput(name, value, formState);
  let isFormValid = true;

  for (const key in formState) {
    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && formState[key].hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATE_FORM_STATE,
    payload: { name, value, visited: true, hasError, errorText, isFormValid },
  });
};

export const validateInput = (name, value, formState = {}) => {
  let hasError = false;
  let errorText = '';

  switch (name) {
    case 'username':
      if (value.trim() === '') {
        hasError = true;
        errorText = "Username can't be empty";
      } else if (value.trim().length < 6) {
        hasError = true;
        errorText = 'Username must have at least 6 characters';
      } else if (value.trim().length > 16) {
        hasError = true;
        errorText = 'Username can have maximum 16 characters';
      } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
        hasError = true;
        errorText = 'Invalid username. Use only letters and digits.';
      } else {
        hasError = false;
        errorText = '';
      }
      break;
    case 'email':
      if (value.trim() === '') {
        hasError = true;
        errorText = "Email can't be empty";
      } else if (
        !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          value,
        )
      ) {
        hasError = true;
        errorText = 'Invalid email';
      } else {
        hasError = false;
        errorText = '';
      }
      break;
    case 'password':
      if (value.trim() === '') {
        hasError = true;
        errorText = "Password can't be empty";
      } else if (value.trim().length < 8) {
        hasError = true;
        errorText = 'Password must have at least 8 characters';
      } else if (value.trim().length > 16) {
        hasError = true;
        errorText = 'Password can have maximum 16 characters';
      } else if (!/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(value)) {
        hasError = true;
        errorText = 'Password must include at least one uppercase letter, number and special character';
      } else {
        hasError = false;
        errorText = '';
      }
      break;

    case 'confirmedPassword':
      if (value !== formState.password.value) {
        hasError = true;
        errorText = "Passwords don't match";
      } else {
        hasError = false;
        errorText = '';
      }
      break;

    default:
      break;
  }

  return { hasError, errorText };
};
