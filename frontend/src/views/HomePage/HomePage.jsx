import './HomePage.scss';

import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import buttonStyles from '../../components/Button/Button.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import { APP_NAME, APP_SUBTITLE } from '../../constants/labels';
import { PATH_TO_CREDITS, PATH_TO_LOGIN, PATH_TO_REGISTER } from '../../constants/paths';

const routes = [
  { url: PATH_TO_LOGIN, label: 'login' },
  { url: PATH_TO_REGISTER, label: 'register' },
  { url: PATH_TO_CREDITS, label: 'credits' },
];

const HomePage = () => {
  return (
    <div className="homepage-page">
      <Navbar />
      <Typography variant="h2" color="#023e8a" fontWeight="bold">
        {APP_NAME}
      </Typography>
      <Typography variant="h4" color="#059ac8" fontWeight="bold">
        {APP_SUBTITLE}
      </Typography>
      <div className="homepage-buttons">
        {routes.map((route) => (
          <Button variant="contained" className={buttonStyles.Button} component={Link} to={route.url}>
            {route.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
