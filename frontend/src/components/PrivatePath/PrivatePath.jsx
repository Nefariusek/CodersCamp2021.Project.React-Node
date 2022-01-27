import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { PATH_TO_LOGIN } from '../../constants/paths';
import LoginContext from '../LoginContext/LoginContext';

const PrivatePath = ({ site }) => {
  const auth = useContext(LoginContext);
  return auth.loginStatus ? site : <Navigate to={PATH_TO_LOGIN} />;
};

PrivatePath.propTypes = {
  site: PropTypes.node.isRequired,
};

export default PrivatePath;
