import './WeeklyCalendar.scss';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';
import startOfWeek from 'date-fns/startOfWeek';
import { useState } from 'react';

const renderDaysInWeek = (date) => {
  const start = startOfWeek(date, { weekStartsOn: 0 });
  let i = 0;
  const tmpDate = start;
  const week = [];
  while (i !== 7) {
    tmpDate.setDate(tmpDate.getDate() + 1);
    console.log(tmpDate);
    week.push(
      <div className="week-day" key={`day${i}`}>
        <div className="day-informations">
          <div className="day-number">{tmpDate.getDate()}</div>
        </div>
      </div>,
    );
    i += 1;
  }
  return week;
};

const renderDaysNames = () => {
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const week = [];
  let i = 0;
  while (i !== 7) {
    week.push(<div className="day-name">{dayNames[i]}</div>);
    i += 1;
  }
  return week;
};

const WeeklyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const previousWeek = () => {
    console.log(selectedDate);
    const newDate = new Date();
    newDate.setMonth(selectedDate.getMonth());
    newDate.setDate(selectedDate.getDate());
    newDate.setDate(selectedDate.getDate() - 7);
    setSelectedDate(newDate);
  };

  const nextWeek = () => {
    console.log(selectedDate);
    const newDate = new Date();
    newDate.setMonth(selectedDate.getMonth());
    newDate.setDate(selectedDate.getDate());
    newDate.setDate(selectedDate.getDate() + 7);
    setSelectedDate(newDate);
  };

  return (
    <div className="week-page">
      <div className="week-settings">
        <ArrowBackIosNewIcon onClick={previousWeek} fontSize="large" className="arrow-back" />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={['day']}
            label="Date"
            value={selectedDate}
            onChange={(newDate) => {
              setSelectedDate(newDate);
            }}
            renderInput={(params) => <TextField {...params} helperText={null} />}
          />
        </LocalizationProvider>
        <ArrowForwardIosIcon onClick={nextWeek} fontSize="large" className="arrow-forward" />
      </div>
      <div className="day-names">{renderDaysNames()}</div>
      <div className="week-calendar">{renderDaysInWeek(selectedDate)}</div>
    </div>
  );
};

export default WeeklyCalendar;
