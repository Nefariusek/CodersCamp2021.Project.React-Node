const saveSettings = (appTheme, soonExpiringFilterLength) => {
  localStorage.setItem('settings', JSON.stringify({ appTheme, soonExpiringFilterLength }));
};

export default saveSettings;
