import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import LoginContext from '../LoginContext/LoginContext';
import pillStyles from './Pill.module.scss';

const typeToClass = {
  pills: pillStyles.blue,
  syrup: pillStyles.orange,
  inhaler: pillStyles.yellow,
  injection: pillStyles.red,
  drops: pillStyles.green,
  patches: pillStyles.pink,
};

const Pill = ({ typeOfMedication, name, showExpirationDate, expirationDate }) => {
  const { medicationCategories } = useContext(LoginContext);

  const medicationCategoryName = medicationCategories.find((c) => c._id === typeOfMedication)?.name;

  const medicationType = medicationCategoryName || typeOfMedication;
  return (
    <Tooltip title={`${medicationType} / ${expirationDate}`}>
      <div>
        <div className={`${pillStyles.pill} ${typeToClass[medicationType]} ${pillStyles.hide}`}>
          {name}
          {showExpirationDate && <div className={pillStyles.expiration}>Exp. date: {expirationDate}</div>}
        </div>
      </div>
    </Tooltip>
  );
};

export default Pill;

Pill.propTypes = {
  name: PropTypes.string.isRequired,
  showExpirationDate: PropTypes.bool.isRequired,
  expirationDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
};
