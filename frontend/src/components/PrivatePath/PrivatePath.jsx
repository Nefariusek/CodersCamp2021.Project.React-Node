import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import LoginContext from '../LoginContext/LoginContext';

const PrivatePath = ({ site }) => {
  const auth = useContext(LoginContext);
  return auth.loginStatus ? site : <Navigate to="/login" />;
};

PrivatePath.propTypes = {
  site: PropTypes.node.isRequired,
};

export default PrivatePath;
