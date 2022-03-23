import { createContext, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userData, setUserData] = useState({});
  return (
    <LoginContext.Provider value={{ loginStatus, setLoginStatus, userData, setUserData }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
