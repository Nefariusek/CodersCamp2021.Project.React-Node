import './DailyView.scss';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AdapterMoment from '@mui/lab/AdapterMoment';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';

import buttonStyles from '../../components/Button/button.module.scss';

const DatePicker = () => {
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Choose Day"
          openTo="day"
          views={['year', 'month', 'day']}
          value={datePickerValue}
          onChange={(newDatePickerValue) => {
            setDatePickerValue(newDatePickerValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

const DailyDrugs = () => {
  return (
    <div className="daily-view-container">
      <div className="title-container">
        <Typography align="center" className="daily-drugs-title" variant="h2">
          DAILY DRUGS
        </Typography>
      </div>
      <div className="content-container">
        <div className="daily-datepicker-container">
          <div
            onClick={() => {
              onsole.log('click');
            }}
          >
            <ArrowBackIosNewIcon fontSize="large" className="arrow-back" />
          </div>
          <DatePicker />
          <div
            onClick={() => {
              console.log('click');
            }}
          >
            <ArrowForwardIosIcon fontSize="large" className="arrow-forward" />
          </div>
        </div>
        <div className="drug-box-container">
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
