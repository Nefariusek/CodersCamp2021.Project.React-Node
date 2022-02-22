const getSettings = () => {
  const settings = JSON.parse(localStorage.getItem('settings')) || {
    appTheme: 'light',
    soonExpiringFilterLength: 3,
  };
  return settings;
};

export default getSettings;
