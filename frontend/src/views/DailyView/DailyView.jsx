import './DailyView.scss';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

import buttonStyles from '../../components/Button/button.module.scss';
import DatePicker from '../../components/DatePicker/DatePicker';

const DailyDrugs = () => {
  return (
    <div className="main-container">
      <div className="title-container">
        <Typography align="center" className="daily-drugs-title" variant="h2">
          DAILY DRUGS
        </Typography>
        <div className="daily-datepicker-container">
          <DatePicker />
        </div>
        <div className="drug-box-container" />
        <Box className="drug-box" sx={{ display: 'flex', borderRadius: 15 }}>
          <Box className="drug-box-compartment 1" sx={{ borderRadius: 10, margin: 3 }}>
            <Typography align="center" className="time-of-day" variant="h6">
              MORNING
            </Typography>
          </Box>

          <Box className="drug-box-compartment 2" sx={{ borderRadius: 10, margin: 3 }}>
            <Typography align="center" className="time-of-day" variant="h6">
              NOON
            </Typography>
          </Box>

          <Box className="drug-box-compartment 3" sx={{ borderRadius: 10, margin: 3 }}>
            <Typography align="center" className="time-of-day" variant="h6">
              EVENING
            </Typography>
          </Box>
        </Box>
      </div>
      <div className="button-add-drug">
        <Button variant="contained" className={buttonStyles.Button}>
          ADD DRUG
        </Button>
      </div>
    </div>
  );
};

export default DailyDrugs;
