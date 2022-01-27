import MedicationIcon from '@mui/icons-material/Medication';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

import pillStyles from './Pill.module.scss';

const typeToClass = {
  pills: pillStyles.blue,
  syrup: pillStyles.orange,
  inhaler: pillStyles.yellow,
  injections: pillStyles.red,
  drops: pillStyles.green,
  patches: pillStyles.pink,
};

const iconTypeOfMedication = {
  pills: <MedicationIcon />,
  syrup: pillStyles.orange,
  inhaler: pillStyles.yellow,
  injections: pillStyles.red,
  drops: pillStyles.green,
  patches: pillStyles.pink,
};

const Pill = ({ typeOfMedication, name, showExpirationDate, expirationDate }) => {
  // console.log(iconTypeOfMedication[typeOfMedication]);
  if (showExpirationDate) {
    return (
      <Tooltip title={`${name} / ${expirationDate} /${(<MedicationIcon />)}`}>
        <div className={`${pillStyles.pill} ${typeToClass[typeOfMedication]}`}>
          {name}
          <div className={pillStyles.expiration}>Exp. date: {expirationDate}</div>
        </div>
      </Tooltip>
    );
  }
  return (
    <Tooltip title={`${name} / ${expirationDate} / ${iconTypeOfMedication[typeOfMedication]} `}>
      <div>
        <div className={`${pillStyles.pill} ${typeToClass[typeOfMedication]} ${pillStyles.hide}`}>{name}</div>
      </div>
    </Tooltip>
  );
};

export default Pill;

Pill.propTypes = {
  typeOfMedication: PropTypes.oneOf(['pills', 'syrup', 'inhaler', 'injection', 'drops', 'patches']).isRequired,
  name: PropTypes.string.isRequired,
  showExpirationDate: PropTypes.bool.isRequired,
  expirationDate: PropTypes.string.isRequired,
};
