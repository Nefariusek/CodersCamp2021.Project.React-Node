import './CalendarPage.scss';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import PickersDay from '@mui/lab/PickersDay';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { TextField } from '@mui/material';
import { useState } from 'react';

const renderDayData = (date, selectedDates, pickersDayProps) => {
  let someInformation = 'some info';
  if (date.getDate() % 2 === 0) {
    someInformation = '';
  }
  return (
    <PickersDay {...pickersDayProps}>
      <div className="day-informations">
        <div className="day-number">{date.getDate()}</div>
        <div>{someInformation}</div>
      </div>
    </PickersDay>
  );
};

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(Date || new Date());
  return (
    <div className="calendar-page">
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

export default CalendarPage;
