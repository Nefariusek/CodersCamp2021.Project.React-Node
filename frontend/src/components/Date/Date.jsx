import './Date.scss';

import React, { useEffect, useState } from 'react';

const Day = () => {
  const [currentDate, setcurrentDate] = useState();

  useEffect(() => {
    const date = new Date();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = weekday[date.getDay()];
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setcurrentDate(`${dayOfWeek}/${day}/${month}/${year}`);
  }, []);

  return <div className="date">{currentDate}</div>;
};

export default Day;
