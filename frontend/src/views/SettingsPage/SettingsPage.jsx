import './SettingsPage.scss';

import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import { useState } from 'react';

import getSettings from '../../api/settings/getSettings';
import saveSettings from '../../api/settings/saveSettings';
import { useDarkTheme, useThemeUpdate } from '../../components/DarkThemeContext/DarkThemeContext';

const SettingsPage = () => {
  const [appTheme, setAppTheme] = useState(getSettings().appTheme);
  const [soonExpiringFilterLength, setSoonExpiringFilterLength] = useState(getSettings().soonExpiringFilterLength);
  const currentTheme = useDarkTheme();
  const toggleTheme = useThemeUpdate();

  const handleThemeChange = (e) => {
    setAppTheme(e.target.value);
    saveSettings(e.target.value, soonExpiringFilterLength);
    if ((e.target.value === 'dark' && !currentTheme) || (e.target.value === 'light' && currentTheme)) toggleTheme();
  };
  const handleLengthChange = (e) => {
    setSoonExpiringFilterLength(e.target.value);
    saveSettings(appTheme, e.target.value);
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
              value={appTheme}
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
              value={soonExpiringFilterLength}
              onChange={handleLengthChange}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={7}>Seven</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
