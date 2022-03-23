import React, { useContext, useState } from 'react';

import SettingsContext from '../SettingsContext/SettingsContext';

const DarkThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useDarkTheme = () => {
  return useContext(DarkThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

export const DarkThemeProvider = ({ children }) => {
  const { settings, setSettings } = useContext(SettingsContext);
  const [darkTheme, setDarkTheme] = useState(settings.appTheme === 'dark');

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <DarkThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
    </DarkThemeContext.Provider>
  );
};
