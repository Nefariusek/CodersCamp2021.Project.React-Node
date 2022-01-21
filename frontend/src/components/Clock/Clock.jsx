import './Clock.scss';

import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="clock">{clockState}</div>;
};

export default Clock;
