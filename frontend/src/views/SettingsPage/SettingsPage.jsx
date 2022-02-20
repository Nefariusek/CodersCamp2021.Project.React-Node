import './SettingsPage.scss';

import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import { useState } from 'react';

const SettingsPage = () => {
  const [defaultTheme, setDefaultTheme] = useState('light');
  const [defaultLength, setDefaultLength] = useState('three');

  const handleThemeChange = (e) => {
    setDefaultTheme(e.target.value);
    // save
  };
  const handleLengthChange = (e) => {
    setDefaultLength(e.target.value);
    // save
  };
  return (
    <div className="settings-page">
      <Typography className="header-h2" variant="h2" color="title.main">
        SETTINGS
      </Typography>
      <div className="settings-container">
        <div className="theme-settings">
          <Typography variant="h4" color="title.light">
            Default app theme:
          </Typography>
          <FormControl>
            <Select
              id="select-theme"
              displayEmpty
              value={defaultTheme}
              onChange={handleThemeChange}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="light">Light Theme</MenuItem>
              <MenuItem value="dark">Dark Theme</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="length-settings">
          <Typography variant="h4" color="title.light">
            Number of drugs displayed in soon expiring:
          </Typography>
          <FormControl>
            <Select
              id="select-soon-expiring-length"
              displayEmpty
              value={defaultLength}
              onChange={handleLengthChange}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="three">Three</MenuItem>
              <MenuItem value="five">Five</MenuItem>
              <MenuItem value="seven">Seven</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
