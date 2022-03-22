import './SignUp.scss';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { useContext, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import postData from '../../../api/postData';
import { PATH_TO_LOGIN } from '../../../constants/paths';
import { BASE_URL } from '../../../constants/restResources';
import ModalContext from '../../ModalContext/ModalContext';
import PopupModal from '../../PopupModal/PopupModal';
import { handleInputBlur, handleInputChange, UPDATE_FORM_STATE, validateInput } from './signUpValidation';

const styles = {
  helper: {
    fontSize: '.8em',
  },
};

const useStyles = makeStyles({
  button: {
    width: '200px',
    border: '3px solid black',
    borderRadius: '45px',
  },
});

const initialFormState = {
  username: { value: '', visited: false, hasError: true, errorText: '' },
  email: { value: '', visited: false, hasError: true, errorText: '' },
  password: { value: '', visited: false, hasError: true, errorText: '' },
  confirmedPassword: {
    value: '',
    visited: false,
    hasError: true,
    errorText: '',
  },
  isFormValid: false,
};

const MESSAGES = {
  success: 'Sign up successful!',
  error: 'An error has occurred',
};

const formReducer = (prevState, action) => {
  const { name, value, visited, hasError, errorText, isFormValid } = action.payload;
  switch (action.type) {
    case UPDATE_FORM_STATE:
      return {
        ...prevState,
        [name]: { ...prevState[name], value, visited, hasError, errorText },
        isFormValid,
      };

    default:
      return prevState;
  }
};

const getUserData = (formState) => {
  const userData = {};
  Object.entries(formState)
    .filter(([key]) => key !== 'isFormValid' && key !== 'confirmedPassword')
    .forEach(([key, value]) => {
      userData[key] = value.value;
    });
  return userData;
};

const SignUp = () => {
  const classes = useStyles();
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [apiMessage, setApiMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const modalState = useContext(ModalContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isFormValid = true;
    for (const name of Object.keys(formState)) {
      const { value } = formState[name];
      const { hasError, errorText } = validateInput(name, value, formState);
      if (hasError) {
        isFormValid = false;
      }

      if (name) {
        dispatch({
          type: UPDATE_FORM_STATE,
          payload: {
            name,
            value,
            visited: true,
            hasError,
            errorText,
            isFormValid,
          },
        });
      }
    }

    if (isFormValid) {
      const userData = getUserData(formState);

      const { error } = await postData(`${BASE_URL}api/users/`, userData);

      if (error) {
        setApiMessage(error.message || MESSAGES.error);
        modalState.setIsModalOpen(true);
      } else {
        setSuccessMessage(MESSAGES.success);

        setTimeout(() => {
          navigate(PATH_TO_LOGIN, { replace: true });
        }, 1000);
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5,
        }}
      >
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12}>
            <TextField
              label="USERNAME"
              name="username"
              id="username"
              variant="filled"
              required
              fullWidth
              autoFocus
              color="secondary"
              value={formState.username.value}
              error={formState.username.visited && formState.username.hasError}
              helperText={formState.username.visited && formState.username.hasError ? formState.username.errorText : ''}
              FormHelperTextProps={{ style: styles.helper }}
              onChange={(e) => {
                handleInputChange(e, formState, dispatch);
              }}
              onBlur={(e) => {
                handleInputBlur(e, formState, dispatch);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="EMAIL"
              id="email"
              name="email"
              variant="filled"
              required
              fullWidth
              color="secondary"
              value={formState.email.value}
              error={formState.email.visited && formState.email.hasError}
              helperText={formState.email.visited && formState.email.hasError ? formState.email.errorText : ''}
              FormHelperTextProps={{ style: styles.helper }}
              onChange={(e) => {
                handleInputChange(e, formState, dispatch);
              }}
              onBlur={(e) => {
                handleInputBlur(e, formState, dispatch);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="PASSWORD"
              name="password"
              id="password"
              type="password"
              variant="filled"
              required
              fullWidth
              color="secondary"
              value={formState.password.value}
              error={formState.password.visited && formState.password.hasError}
              helperText={formState.password.visited && formState.password.hasError ? formState.password.errorText : ''}
              FormHelperTextProps={{ style: styles.helper }}
              onChange={(e) => {
                handleInputChange(e, formState, dispatch);
              }}
              onBlur={(e) => {
                handleInputBlur(e, formState, dispatch);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="CONFIRM PASSWORD"
              name="confirmedPassword"
              id="confirmedPassword"
              type="password"
              variant="filled"
              required
              fullWidth
              color="secondary"
              value={formState.confirmedPassword.value}
              error={formState.confirmedPassword.visited && formState.confirmedPassword.hasError}
              helperText={
                formState.confirmedPassword.visited && formState.confirmedPassword.hasError
                  ? formState.confirmedPassword.errorText
                  : ''
              }
              FormHelperTextProps={{ style: styles.helper }}
              onChange={(e) => {
                handleInputChange(e, formState, dispatch);
              }}
              onBlur={(e) => {
                handleInputBlur(e, formState, dispatch);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" component="p" align="center">
              {successMessage}
            </Typography>
            <PopupModal message={apiMessage} type="error" modalState={modalState} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" mb={2}>
          <Button type="submit" variant="contained" color="secondary" className={classes.button}>
            Sign Up
          </Button>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              component={Link}
              to={PATH_TO_LOGIN}
              color="secondary"
              onMouseDown={(e) => {
                e.preventDefault();
                e.target.click();
              }}
              align="center"
            >
              Already have an account? Sign in
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignUp;
