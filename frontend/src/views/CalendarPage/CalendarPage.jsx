import './CalendarPage.scss';

import { FormControl, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

import MonthlyCalendar from '../../components/Calendar/MonthlyCalendar';
import WeeklyCalendar from '../../components/Calendar/WeeklyCalendar';

const CalendarPage = () => {
  const [calendar, setCalendar] = useState(<MonthlyCalendar />);
  const [calendarName, setCalendarName] = useState('Month');

  const handleChange = (e) => {
    setCalendarName(e.target.value);
    switch (e.target.value) {
      case 'Month':
        setCalendar(<MonthlyCalendar />);
        break;
      case 'Week':
        setCalendar(<WeeklyCalendar />);
        break;
      case 'Day':
        setCalendar(<div>Daily Drugs</div>);
        break;
      default:
        break;
    }
  };

  return (
    <div className="calendar-page">
      <FormControl>
        <Select
          id="select-calendar"
          displayEmpty
          value={calendarName}
          onChange={handleChange}
          // input={<OutlinedInput />}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="Month">Monthly Calendar</MenuItem>
          <MenuItem value="Week">Weekly Calendar</MenuItem>
          <MenuItem value="Day">Daily Calendar</MenuItem>
        </Select>
      </FormControl>
      {calendar}
    </div>
  );
};

export default CalendarPage;
