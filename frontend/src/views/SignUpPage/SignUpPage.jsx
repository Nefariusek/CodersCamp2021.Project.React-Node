import './SignUpPage.scss';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import SignUp from '../../components/Auth/SignUp/SignUp';
import { AID_KIT_IMAGE_ALT, AID_KIT_IMAGE_PATH } from '../../constants/images';
import { APP_NAME, APP_SUBTITLE } from '../../constants/labels';

const MAIN_IMAGE = { pathOrUrl: AID_KIT_IMAGE_PATH, alt: AID_KIT_IMAGE_ALT };

const SignUpPage = () => {
  return (
    <Container className="signup-page">
      <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={6}>
          <Stack alignItems="center">
            <Box align="left">
              <Typography variant="h2" component="h1" color="title.main" fontWeight="bold">
                {APP_NAME}
              </Typography>
              <Typography variant="h4" component="h3" color="title.light" fontWeight="bold">
                {APP_SUBTITLE}
              </Typography>
            </Box>
            <SignUp />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <img src={MAIN_IMAGE.pathOrUrl} alt={MAIN_IMAGE.alt} className="main-picture" width="65%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
