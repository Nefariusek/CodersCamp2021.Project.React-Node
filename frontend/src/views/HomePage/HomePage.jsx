import './HomePage.scss';
import 'typeface-roboto';

import Button from '@mui/material/Button';
import React from 'react';

import buttoStyles from '../../components/Button/button.module.scss';
import Clock from '../../components/Clock/Clock';
import Date from '../../components/Date/Date';

function homePage() {
  return (
    <div className="homeContainer">
      <div className="textContetn">
        <div className="title">
          <h1>@ID kIT</h1>
          <h2>Your medical assistant</h2>
        </div>
        <ul className="navList">
          <Button variant="contained" className={buttoStyles.Button}>
            DAILY DRUGS
          </Button>
          <br />
          <Button variant="contained" className={buttoStyles.Button}>
            CREDITS
          </Button>
          <br />
          <Button variant="contained" className={buttoStyles.Button}>
            LEXICON
          </Button>
          <br />
          <Button variant="contained" className={buttoStyles.Button}>
            SETTINGS
          </Button>
        </ul>
      </div>
      <div className="aidKitDiv">
        <div className="daytime">
          <Clock />
          <Date />
        </div>
        <img className="aidKit" alt="aid kit" src="../../../public/apteczka-cutout.png" />
      </div>
    </div>
  );
}

export default homePage;
