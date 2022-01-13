import './SignUp.scss';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import React, { useReducer } from 'react';

import { onInputBlur, onInputChange, UPDATE_FORM_STATE, validateInput } from './signUpValidation';

const styles = {
  helper: {
    color: 'black',
    fontSize: '.8em',
  },
};

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

const SignUp = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleSubmit = (e) => {
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
      alert('Sign up successfull!');
    }
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
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
        <Grid container spacing={2}>
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
              InputProps={{
                style: styles.input,
              }}
              onChange={(e) => {
                onInputChange('username', e.target.value, formState, dispatch);
              }}
              onBlur={(e) => {
                onInputBlur('username', e.target.value, formState, dispatch);
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
                onInputChange('email', e.target.value, formState, dispatch);
              }}
              onBlur={(e) => {
                onInputBlur('email', e.target.value, formState, dispatch);
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
                onInputChange('password', e.target.value, formState, dispatch);
              }}
              onBlur={(e) => {
                onInputBlur('password', e.target.value, formState, dispatch);
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
                onInputChange('confirmedPassword', e.target.value, formState, dispatch);
              }}
              onBlur={(e) => {
                onInputBlur('confirmedPassword', e.target.value, formState, dispatch);
              }}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              my: 3,
              width: 1 / 3,
              border: 3,
              borderColor: 'black',
              borderRadius: 15,
            }}
          >
            Sign Up
          </Button>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Link href="#" variant="body2" color="secondary">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignUp;
