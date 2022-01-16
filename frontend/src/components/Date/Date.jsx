import './Date.scss';

import React, { useEffect, useState } from 'react';

const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    const date = new Date();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = weekdays[date.getDay()];
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setCurrentDate(`${dayOfWeek}/${day}/${month}/${year}`);
  }, []);

  return <div className="date">{currentDate}</div>;
};

export default DateDisplay;
