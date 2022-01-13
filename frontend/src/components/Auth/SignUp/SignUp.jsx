import './SignUp.scss';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign up succesfull');
    const data = new FormData(e.currentTarget);
    console.log({
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirm-password'),
    });
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="EMAIL" name="email" id="email" variant="filled" required fullWidth color="secondary" />
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="CONFIRM PASSWORD"
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              variant="filled"
              required
              fullWidth
              color="secondary"
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
