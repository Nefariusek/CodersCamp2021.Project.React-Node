import './DailyView.scss';

import Typography from '@mui/material/Typography';
import React from 'react';

import DayPicker from '../../components/DatePicker/DatePicker';

const Drugs = () => {
  return (
    <div>
      <div className="title-container">
        <Typography align="center" className="daily-drugs-title" variant="h2">
          DAILY DRUGS
        </Typography>
        <div className="daily-datepicker-container">
          <DayPicker />
        </div>
      </div>
    </div>
  );
};

export default Drugs;
