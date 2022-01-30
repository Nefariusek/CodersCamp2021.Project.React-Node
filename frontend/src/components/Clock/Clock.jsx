import './Clock.scss';

import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <Typography variant="h4" className="clock" component="div" color="datetime.mainFont">
      {clockState}
    </Typography>
  );
};

export default Clock;
