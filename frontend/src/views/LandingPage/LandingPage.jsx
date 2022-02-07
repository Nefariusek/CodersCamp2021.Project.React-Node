import './LandingPage.scss';

import GroupIcon from '@mui/icons-material/Group';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import buttonStyles from '../../components/Button/Button.module.scss';
import imageData from '../../components/ImageSlider/imageData';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { LOGO_ALT, LOGO_PATH } from '../../constants/images';
import { APP_NAME, APP_SUBTITLE } from '../../constants/labels';
import { PATH_TO_CREDITS, PATH_TO_LOGIN, PATH_TO_REGISTER } from '../../constants/paths';

const logoImg = { path: LOGO_PATH, alt: LOGO_ALT };

const routes = [
  {
    url: PATH_TO_LOGIN,
    label: 'Login',
    icon: <LoginIcon className="landingpage-icon" />,
  },
  {
    url: PATH_TO_REGISTER,
    label: 'Register',
    icon: <HowToRegIcon className="landingpage-icon" />,
  },
  {
    url: PATH_TO_CREDITS,
    label: 'Credits',
    icon: <GroupIcon className="landingpage-icon" />,
  },
];

const Navigation = () => {
  return (
    <Stack component="nav" direction={{ xs: 'column', md: 'row' }} spacing={2}>
      {routes.map((route) => (
        <Button key={route.label} variant="contained" component={Link} to={route.url} className={buttonStyles.Button}>
          {route.icon} {route.label}
        </Button>
      ))}
    </Stack>
  );
};

const LandingPage = () => {
  return (
    <Container className="landing-page">
      <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Stack direction="row" spacing={4} alignItems="center" justifyContent="center">
            <Avatar src={logoImg.path} alt={logoImg.alt} sx={{ width: 100, height: 100 }} />
            <Stack alignItems="center">
              <Box align="left" my={{ xs: '1', md: '2' }}>
                <Typography variant="h2" component="h1" color="title.main" fontWeight="bold">
                  {APP_NAME}
                </Typography>
                <Typography variant="h4" component="h2" color="title.light" fontWeight="bold">
                  {APP_SUBTITLE}
                </Typography>
              </Box>
            </Stack>
          </Stack>

          <Grid item container xs={12} alignItems="center" justifyContent="center">
            <ImageSlider slides={imageData} delay={4000} />
          </Grid>

          <Grid item container xs={12} my={3} alignItems="center" justifyContent="center">
            <Navigation />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
