const ErrorMessages = {
  username: {
    EMPTY: "Username can't be empty.",
    MIN: 'Username must have at least 6 characters.',
    MAX: 'Username can have maximum 16 characters.',
    ALLOWED_CHARACTERS: 'Invalid username. Use only letters and digits.',
  },
  email: {
    EMPTY: "Email can't be empty.",
    ALLOWED_FORMAT: 'Invalid email.',
  },
  password: {
    EMPTY: "Password can't be empty.",
    MIN: 'Password must have at least 8 characters.',
    MAX: 'Password can have maximum 16 characters.',
    ALLOWED_CHARACTERS: 'Password must include at least one uppercase letter, number and special character.',
  },
  confirmedPassword: {
    MATCH: "Passwords don't match.",
  },
};

const RegExpressions = {
  EMAIL:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
};

export const UPDATE_FORM_STATE = 'UPDATE_FORM_STATE';

export const handleInputChange = (e, formState, dispatch) => {
  const { name, value } = e.target;
  handleInput(name, value, formState, dispatch, false);
};

export const handleInputBlur = (e, formState, dispatch) => {
  const { name, value } = e.target;
  handleInput(name, value, formState, dispatch, true);
};

const handleInput = (name, value, formState, dispatch, visited) => {
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
    payload: { name, value, visited, hasError, errorText, isFormValid },
  });
};

export const validateInput = (name, value, formState = {}) => {
  let result = {};

  switch (name) {
    case 'username':
      result = validateUsername(value);
      break;
    case 'email':
      result = validateEmail(value);
      break;
    case 'password':
      result = validatePassword(value);
      break;
    case 'confirmedPassword':
      result = validatePasswordsMatching(value, formState.password.value);
      break;
    default:
      break;
  }

  return result;
};

const validateUsername = (value) => {
  let hasError = false;
  let errorText = '';

  if (value.trim() === '') {
    hasError = true;
    errorText = ErrorMessages.username.EMPTY;
  } else if (value.trim().length < 6) {
    hasError = true;
    errorText = ErrorMessages.username.MIN;
  } else if (value.trim().length > 16) {
    hasError = true;
    errorText = ErrorMessages.username.MAX;
  } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
    hasError = true;
    errorText = ErrorMessages.username.ALLOWED_CHARACTERS;
  } else {
    hasError = false;
    errorText = '';
  }

  return { hasError, errorText };
};

const validateEmail = (value) => {
  let hasError = false;
  let errorText = '';

  if (value.trim() === '') {
    hasError = true;
    errorText = ErrorMessages.email.EMPTY;
  } else if (!RegExpressions.EMAIL.test(value)) {
    hasError = true;
    errorText = ErrorMessages.email.ALLOWED_FORMAT;
  } else {
    hasError = false;
    errorText = '';
  }

  return { hasError, errorText };
};

const validatePassword = (value) => {
  let hasError = false;
  let errorText = '';

  if (value.trim() === '') {
    hasError = true;
    errorText = ErrorMessages.password.EMPTY;
  } else if (value.trim().length < 8) {
    hasError = true;
    errorText = ErrorMessages.password.MIN;
  } else if (value.trim().length > 16) {
    hasError = true;
    errorText = ErrorMessages.password.MAX;
  } else if (!RegExpressions.PASSWORD.test(value)) {
    hasError = true;
    errorText = ErrorMessages.password.ALLOWED_CHARACTERS;
  } else {
    hasError = false;
    errorText = '';
  }

  return { hasError, errorText };
};

const validatePasswordsMatching = (value, value2) => {
  let hasError = false;
  let errorText = '';

  if (value !== value2) {
    hasError = true;
    errorText = ErrorMessages.confirmedPassword.MATCH;
  } else {
    hasError = false;
    errorText = '';
  }

  return { hasError, errorText };
};
