import React, { useContext, useState } from 'react';

const DarkThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useDarkTheme = () => {
  return useContext(DarkThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

export const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <DarkThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
    </DarkThemeContext.Provider>
  );
};