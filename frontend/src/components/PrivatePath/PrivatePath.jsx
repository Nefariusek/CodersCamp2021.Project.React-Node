import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const PrivatePath = ({ site }) => {
  const auth = true;
  return auth ? site : <Navigate to="/login" />;
};

PrivatePath.propTypes = {
  site: PropTypes.node.isRequired,
};

export default PrivatePath;
