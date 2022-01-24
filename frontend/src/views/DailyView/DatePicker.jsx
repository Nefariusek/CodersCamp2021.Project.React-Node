import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AdapterMoment from '@mui/lab/AdapterMoment';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import React from 'react';

const DatePicker = () => {
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

  const forward = () => {
    if (datePickerValue < new Date(new Date().setDate(new Date().getDate() + 6))) {
      setDatePickerValue(() => new Date(new Date().setDate(datePickerValue.getDate() + 1)));
    } else {
      alert("You can't go further");
      setDatePickerValue(() => new Date(new Date().setDate(new Date().getDate() + 7)));
    }
  };

  const backward = () => {
    if (datePickerValue > new Date(new Date().setDate(new Date().getDate() - 7))) {
      setDatePickerValue(() => new Date(new Date().setDate(datePickerValue.getDate() - 1)));
    } else {
      alert("You can't go further");
    }
  };

  return (
    <>
      <div role="button" tabIndex="0" onKeyPress={backward} onClick={backward}>
        <ArrowBackIosNewIcon fontSize="large" className="arrow-back" />
      </div>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={1}>
          <DesktopDatePicker
            label="Choose Day"
            openTo="day"
            views={['year', 'day', 'month']}
            value={datePickerValue}
            onChange={(newDatePickerValue) => {
              setDatePickerValue(newDatePickerValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>

      <div role="button" tabIndex="0" onKeyPress={forward} onClick={forward}>
        <ArrowForwardIosIcon fontSize="large" className="arrow-forward" />
      </div>
    </>
  );
};

export default DatePicker;
