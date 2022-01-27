import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AdapterMoment from '@mui/lab/AdapterMoment';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { addDays, subDays } from 'date-fns';
import React from 'react';

const DatePicker = () => {
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

  const goOneDayForward = () => {
    if (datePickerValue < addDays(new Date(), 7)) {
      setDatePickerValue(() => new Date(addDays(datePickerValue, 1)));
    } else {
      alert("You can't go further");
    }
  };

  const goOneDayBackwards = () => {
    if (datePickerValue > subDays(new Date(), 7)) {
      setDatePickerValue(() => new Date(subDays(datePickerValue, 1)));
    } else {
      alert("You can't go further");
    }
  };

  return (
    <>
      <div role="button" tabIndex="0" onKeyPress={goOneDayBackwards} onClick={goOneDayBackwards}>
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

      <div role="button" tabIndex="0" onKeyPress={goOneDayForward} onClick={goOneDayForward}>
        <ArrowForwardIosIcon fontSize="large" className="arrow-forward" />
      </div>
    </>
  );
};

export default DatePicker;
