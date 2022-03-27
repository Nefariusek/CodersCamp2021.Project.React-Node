import { createContext, useState } from 'react';

import Settings from '../../model/Settings';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(new Settings('light', 3));
  return <SettingsContext.Provider value={{ settings, setSettings }}>{children}</SettingsContext.Provider>;
};

export default SettingsContext;
