import './LandingPage.scss';

import ConstructionIcon from '@mui/icons-material/Construction';
import GroupIcon from '@mui/icons-material/Group';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import buttonStyles from '../../components/Button/button.module.scss';
import { APP_NAME, APP_SUBTITLE } from '../../constants/labels';
import { PATH_TO_CREDITS, PATH_TO_LOGIN, PATH_TO_REGISTER, PATH_TO_USER_HOMEPAGE } from '../../constants/paths';

const LOGO_IMG = { path: './logo_color.png', alt: 'logo' };

const routes = [
  {
    url: PATH_TO_LOGIN,
    label: 'login',
    icon: <LoginIcon className="landingpage-icon" />,
  },
  {
    url: PATH_TO_REGISTER,
    label: 'register',
    icon: <HowToRegIcon className="landingpage-icon" />,
  },
  {
    url: PATH_TO_CREDITS,
    label: 'credits',
    icon: <GroupIcon className="landingpage-icon" />,
  },
];

const Navigation = () => {
  return (
    <Stack>
      <Stack component="nav" direction={{ xs: 'column', md: 'row' }} spacing={2}>
        {routes.map((route) => (
          <Button key={route.label} variant="contained" component={Link} to={route.url} className={buttonStyles.Button}>
            {route.icon} {route.label}
          </Button>
        ))}
      </Stack>
      <Box align="center" mt={4}>
        <Button variant="contained" component={Link} to={PATH_TO_USER_HOMEPAGE} className={buttonStyles.Button}>
          User Homepage
        </Button>
      </Box>
    </Stack>
  );
};

const landingPageTheme = createTheme({
  palette: {
    background: {
      default: '#48cae4',
    },
    title: {
      main: '#023e8a',
      light: '#059ac8',
    },
    tonalOffset: 0.1,
  },
});

const LandingPage = () => {
  return (
    <ThemeProvider theme={landingPageTheme}>
      <Container className="landing-page">
        <Grid container justifyContent="center">
          <Grid item xs={12} align="center">
            <Stack direction="row" spacing={4} alignItems="center" justifyContent="center">
              <Avatar src={LOGO_IMG.path} alt={LOGO_IMG.alt} sx={{ width: 100, height: 100 }} />
              <Stack alignItems="center">
                <Box align="left" my={4}>
                  <Typography variant="h2" component="h1" color="title.main" fontWeight="bold">
                    {APP_NAME}
                  </Typography>
                  <Typography variant="h4" component="h3" color="title.light" fontWeight="bold">
                    {APP_SUBTITLE}
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            <Grid item container xs={12} alignItems="center" justifyContent="center">
              <Typography color="title.main" fontSize="20px">
                <ConstructionIcon className="under-construction" />
                Under construction :)
              </Typography>
            </Grid>
            <Grid item container xs={12} my={3} alignItems="center" justifyContent="center">
              <Navigation />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default LandingPage;
