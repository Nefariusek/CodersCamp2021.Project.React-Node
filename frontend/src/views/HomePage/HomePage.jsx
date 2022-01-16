import './HomePage.scss';
import 'typeface-roboto';

import Button from '@mui/material/Button';
import React from 'react';

import buttonStyles from '../../components/Button/button.module.scss';
import Calendar from '../../components/Calendar/Calendar';
import Clock from '../../components/Clock/Clock';
import DateDisplay from '../../components/Date/Date';

const ButtonsUserHub = () => {
  const mainButtons = [
    { buttonLabel: 'DAILY DRUGS' },
    { buttonLabel: 'CREDITS' },
    { buttonLabel: 'LEXICON' },
    { buttonLabel: 'SETTINGS' },
  ];
  return (
    <>
      {mainButtons.map(({ buttonLabel }) => (
        <Button variant="contained" className={buttonStyles.Button}>
          {buttonLabel}
        </Button>
      ))}
    </>
  );
};

const HomePage = () => {
  return (
    <div className="user-hub-container">
      <div className="home-container">
        <div className="text-container">
          <div className="title">
            <h1>aID kIT</h1>
            <h2>Your medical assistant</h2>
          </div>
          <div className="nav-list">
            <ButtonsUserHub />
          </div>
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
