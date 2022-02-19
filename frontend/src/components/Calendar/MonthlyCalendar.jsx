import './MonthlyCalendar.scss';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import PickersDay from '@mui/lab/PickersDay';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { TextField } from '@mui/material';
import { useState } from 'react';

import drugs from '../../mock/drugs';

const renderDayData = (date, selectedDates, pickersDayProps) => {
  let expNames = '';
  drugs.forEach((drug) => {
    if (drug.expirationDate.getTime() === date.getTime()) {
      expNames = `${expNames}${drug.name}\n`;
    }
  });

  return (
    <PickersDay {...pickersDayProps}>
      <div className="day-informations">
        <div className="day-number">{date.getDate()}</div>
        <p className="day-expiring">{expNames}</p>
      </div>
    </PickersDay>
  );
};

const MonthlyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(Date || new Date());

  return (
    <div className="monthly-calendar">
      <p>This view is available on bigger devices.</p>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          views={['day']}
          displayStaticWrapperAs="desktop"
          label="MonthlyCalendar"
          value={selectedDate}
          onChange={(newSelectedDate) => {
            setSelectedDate(newSelectedDate);
          }}
          renderDay={renderDayData}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="'Week of' MMM d"
        />
      </LocalizationProvider>
    </div>
  );
};

export default MonthlyCalendar;
