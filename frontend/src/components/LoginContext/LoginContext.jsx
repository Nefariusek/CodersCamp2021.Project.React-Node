import { createContext, useState } from 'react';

import useGet from '../../api/useGet';

const LoginContext = createContext();

const MEDICATION_CATEGORIES_URL = 'http://localhost:8080/api/categories';

export const LoginProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userData, setUserData] = useState({});
  const { data } = useGet(MEDICATION_CATEGORIES_URL);
  const medicationCategories = data?.medicationCategories;

  return (
    <LoginContext.Provider value={{ loginStatus, setLoginStatus, userData, setUserData, medicationCategories }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
