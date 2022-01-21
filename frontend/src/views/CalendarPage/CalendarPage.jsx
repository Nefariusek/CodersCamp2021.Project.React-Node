import './CalendarPage.scss';

import { MenuItem, OutlinedInput, Select } from '@mui/material';
import { useState } from 'react';

import MonthlyCalendar from '../../components/Calendar/MonthlyCalendar';
import WeeklyCalendar from '../../components/Calendar/WeeklyCalendar';

const CalendarPage = () => {
  const [calendar, setCalendar] = useState(<MonthlyCalendar />);

  const handleChange = (e) => {
    setCalendar(e.target.value);
  };

  return (
    <div className="calendar-page">
      <Select
        id="select-calendar"
        value={calendar}
        label="Calendar"
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
      >
        <MenuItem value={<MonthlyCalendar />}>Month</MenuItem>
        <MenuItem value={<WeeklyCalendar />}>Week</MenuItem>
        <MenuItem value={<div>Day</div>}>Day</MenuItem>
      </Select>
      {calendar}
    </div>
  );
};

export default CalendarPage;
