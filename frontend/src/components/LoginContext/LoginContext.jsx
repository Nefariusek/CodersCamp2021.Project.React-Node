import { createContext, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [medicationCategories, setMedicationCategories] = useState([]);
  return (
    <LoginContext.Provider value={{ loginStatus, setLoginStatus, medicationCategories, setMedicationCategories }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
