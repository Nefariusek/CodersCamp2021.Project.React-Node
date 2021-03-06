import './WeeklyCalendar.scss';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField, Typography } from '@mui/material';
import startOfWeek from 'date-fns/startOfWeek';
import { useState } from 'react';

import drugs from '../../mock/drugs';

const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const renderDaysInWeek = (date) => {
  const start = startOfWeek(date, { weekStartsOn: 0 });
  let i = 0;
  const tmpDate = start;
  const week = [];
  while (i !== 7) {
    let expNames = '';
    drugs.forEach((drug) => {
      if (drug.expirationDate.getTime() === tmpDate.getTime()) {
        expNames = `${expNames}${drug.nameOfMedication}\n`;
      }
    });
    week.push(
      <div className="week-day" key={`day${i}`}>
        <div className="day-informations">
          <Typography className="day-number" color="datetime.weekDayFont">
            {tmpDate.getDate()}
          </Typography>
          <div className="day-information-name" key={`day${dayNames[i]}`}>
            <Typography className="day-name" color="datetime.weekDayFont">
              {dayNames[i]}
            </Typography>
          </div>
          <div className="day-expiring">{expNames}</div>
        </div>
      </div>,
    );
    i += 1;
    tmpDate.setDate(tmpDate.getDate() + 1);
  }
  return week;
};

const renderDayNames = () => {
  return dayNames.map((dayName) => (
    <Typography className="day-name" color="title.light" fontWeight="bold" key={`${dayName}`}>
      {dayName}
    </Typography>
  ));
};

const WeeklyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const previousWeek = () => {
    const newDate = new Date();
    newDate.setMonth(selectedDate.getMonth());
    newDate.setDate(selectedDate.getDate());
    newDate.setDate(selectedDate.getDate() - 7);
    setSelectedDate(newDate);
  };

  const nextWeek = () => {
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
            value={selectedDate}
            onChange={(newDate) => {
              setSelectedDate(newDate);
            }}
            renderInput={(params) => <TextField {...params} helperText={null} />}
          />
        </LocalizationProvider>
        <ArrowForwardIosIcon onClick={nextWeek} fontSize="large" className="arrow-forward" />
      </div>
      <div className="day-names">{renderDayNames()}</div>
      <div className="week-calendar">{renderDaysInWeek(selectedDate)}</div>
    </div>
  );
};

export default WeeklyCalendar;
