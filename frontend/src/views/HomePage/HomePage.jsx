import './HomePage.scss';
import 'typeface-roboto';

import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import buttonStyles from '../../components/Button/button.module.scss';
import Calendar from '../../components/Calendar/Calendar';
import Clock from '../../components/Clock/Clock';
import DateDisplay from '../../components/Date/Date';
import { APP_NAME, APP_SUBTITLE } from '../../constants/labels';
import { PATH_TO_CREDITS, PATH_TO_LOGIN, PATH_TO_REGISTER } from '../../constants/paths';

const routes = [
  { url: PATH_TO_LOGIN, label: 'login' },
  { url: PATH_TO_REGISTER, label: 'register' },
  { url: PATH_TO_CREDITS, label: 'credits' },
];

const ButtonsUserHub = () => {
  return (
    <div className="nav-list">
      {routes.map((route) => (
        <Button variant="contained" className={buttonStyles.Button} component={Link} to={route.url}>
          {route.label}
        </Button>
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="user-hub-container">
      <div className="home-container">
        <div className="text-container">
          <div className="title">
            <Typography variant="h2" color="#023e8a" fontWeight="bold">
              {APP_NAME}
            </Typography>
            <Typography variant="h4" color="#059ac8" fontWeight="bold">
              {APP_SUBTITLE}
            </Typography>
          </div>
          <ButtonsUserHub />
        </div>
        <div className="aid-kit-container">
          <div className="day-time">
            <Clock />
            <DateDisplay />
            <Calendar />
          </div>
          <img className="aid-kit" alt="aid kit" src="../../../public/apteczka-cutout.png" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
