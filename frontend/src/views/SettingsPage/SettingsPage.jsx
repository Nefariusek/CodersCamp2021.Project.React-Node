import './SettingsPage.scss';

import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';

import usePatchData from '../../api/usePatchData';
import { useDarkTheme, useThemeUpdate } from '../../components/DarkThemeContext/DarkThemeContext';
import LoginContext from '../../components/LoginContext/LoginContext';
import SettingsContext from '../../components/SettingsContext/SettingsContext';
import { BASE_URL } from '../../constants/restResources';
import Settings from '../../model/Settings';

const SettingsPage = () => {
  const { settings, setSettings } = useContext(SettingsContext);
  const auth = useContext(LoginContext);
  const [appTheme, setAppTheme] = useState(settings.appTheme);
  const [soonExpiringFilterLength, setSoonExpiringFilterLength] = useState(settings.soonExpiringFilterLength);
  const currentTheme = useDarkTheme();
  const toggleTheme = useThemeUpdate();
  const { isSuccess, error, isLoading } = usePatchData(`${BASE_URL}api/settings/${auth.userData.profileRef}`, settings);
  useEffect(() => {
    if (!isLoading && isSuccess) {
      alert('Settings updated successfully!');
    }
    if (!isLoading && error) {
      alert(`Error occurred: ${error}`);
    }
  }, [isSuccess, error, isLoading]);

  const handleThemeChange = (e) => {
    setAppTheme(e.target.value);
    setSettings(new Settings(e.target.value, soonExpiringFilterLength));
    if ((e.target.value === 'dark' && !currentTheme) || (e.target.value === 'light' && currentTheme)) toggleTheme();
  };
  const handleLengthChange = (e) => {
    setSoonExpiringFilterLength(e.target.value);
    setSettings(new Settings(appTheme, e.target.value));
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
