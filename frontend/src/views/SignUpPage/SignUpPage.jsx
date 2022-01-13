import './SignUpPage.scss';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import mainImage from '/apteczka.png';

import SignUp from '../../components/Auth/SignUp/SignUp';

const MAIN_IMAGE = { pathOrUrl: mainImage, alt: 'aid kit' };

const signupPageTheme = createTheme({
  palette: {
    primary: {
      main: '#48cae4',
    },
    secondary: {
      main: '#fcd433',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    error: {
      main: '#880e4f',
    },
    background: {
      default: '#48cae4',
    },
    tonalOffset: 0.1,
  },
});

const SignUpPage = () => {
  return (
    <ThemeProvider theme={signupPageTheme}>
      <Container className="signup-page">
        <CssBaseline />
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <Stack alignItems="center">
              <Box align="left">
                <Typography variant="h2" component="h1" color="#023e8a" fontWeight="bold">
                  @id kIT
                </Typography>
                <Typography variant="h4" component="h3" color="#059ac8" fontWeight="bold">
                  Your Medical Assistant
                </Typography>
              </Box>
              <SignUp />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <img src={MAIN_IMAGE.pathOrUrl} className="main-picture" alt={MAIN_IMAGE.alt} width="80%" />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default SignUpPage;
