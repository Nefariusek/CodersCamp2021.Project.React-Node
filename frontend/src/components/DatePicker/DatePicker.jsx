import './DatePicker.scss';

import AdapterMoment from '@mui/lab/AdapterMoment';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import React from 'react';

const DayPicker = () => {
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Choose Day"
          openTo="day"
          views={['year', 'month', 'day']}
          value={datePickerValue}
          onChange={(newDatePickerValuen) => {
            setDatePickerValue(newDatePickerValuen);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DayPicker;
