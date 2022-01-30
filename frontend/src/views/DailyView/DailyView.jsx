import './DailyView.scss';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

import buttonStyles from '../../components/Button/Button.module.scss';
import DatePicker from './DatePicker';

const TITLE = `DAILY DRUGS`;
const DAYTIMES = [`MORNING`, `NOON`, `EVENING`];

const DailyDrugs = () => {
  return (
    <div className="daily-view-container">
      <div className="title-container">
        <Typography align="center" className="daily-drugs-title" variant="h2" color="title.main">
          {TITLE}
        </Typography>
      </div>
      <div className="content-container">
        <div className="daily-datepicker-container">
          <DatePicker />
        </div>
        <div className="drug-box-container">
          <Box className="drug-box" sx={{ display: 'flex', borderRadius: 15 }}>
            <Box className="drug-box-compartment 1" sx={{ borderRadius: 10, margin: 3 }}>
              <Typography align="center" className="time-of-day" variant="h6">
                {DAYTIMES[0]}
              </Typography>
            </Box>

            <Box className="drug-box-compartment 2" sx={{ borderRadius: 10, margin: 3 }}>
              <Typography align="center" className="time-of-day" variant="h6">
                {DAYTIMES[1]}
              </Typography>
            </Box>

            <Box className="drug-box-compartment 3" sx={{ borderRadius: 10, margin: 3 }}>
              <Typography align="center" className="time-of-day" variant="h6">
                {DAYTIMES[2]}
              </Typography>
            </Box>
          </Box>
        </div>
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
