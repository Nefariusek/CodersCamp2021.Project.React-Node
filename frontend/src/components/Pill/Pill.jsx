import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

import { MEDICATION_TYPES } from '../../constants/picklistValues';
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
  if (showExpirationDate) {
    return (
      <Tooltip title={`${name} / ${expirationDate}`}>
        <div className={`${pillStyles.pill} ${typeToClass[typeOfMedication]}`}>
          {name}
          <div className={pillStyles.expiration}>Exp. date: {expirationDate}</div>
        </div>
      </Tooltip>
    );
  }
  return (
    <Tooltip title={`${name} / ${expirationDate}`}>
      <div>
        <div className={`${pillStyles.pill} ${typeToClass[typeOfMedication]} ${pillStyles.hide}`}>{name}</div>
      </div>
    </Tooltip>
  );
};

export default Pill;

Pill.propTypes = {
  typeOfMedication: PropTypes.oneOf(MEDICATION_TYPES).isRequired,
  name: PropTypes.string.isRequired,
  showExpirationDate: PropTypes.bool.isRequired,
  expirationDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
};
