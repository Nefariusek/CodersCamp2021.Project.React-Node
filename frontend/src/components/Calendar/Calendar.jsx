import './Calendar.scss';

import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextField from '@mui/material/TextField';
import React from 'react';

const Calendar = () => {
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

  return (
    <div className="calendar">
      <LocalizationProvider className="calendar" dateAdapter={AdapterMoment}>
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={datePickerValue}
          onChange={(newValue) => {
            setDatePickerValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
