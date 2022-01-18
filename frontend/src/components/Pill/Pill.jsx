import classNames from 'classnames';
import PropTypes from 'prop-types';

import pillStyles from './Pill.scss';

const typeToClass = {
  pills: pillStyles.blue,
  syrup: pillStyles.orange,
  inhaler: pillStyles.yellow,
  injections: pillStyles.red,
  drops: pillStyles.green,
  patches: pillStyles.pink,
};

const Pill = ({ typeOfMedication, name, showExpirationDate, expirationDate }) => {
  if (showExpirationDate) {
    return (
      <div className={classNames(pillStyles.pill, typeToClass[typeOfMedication])}>
        {name}
        <div className={pillStyles.expiration}>{expirationDate}</div>
      </div>
    );
  }
  return <div className={classNames(pillStyles.pill, typeToClass[typeOfMedication], pillStyles.show)}>{name}</div>;
};

export default Pill;

Pill.propTypes = {
  typeOfMedication: PropTypes.oneOf(['pills', 'syrup', 'inhaler', 'injection', 'drops', 'patches']).isRequired,
  name: PropTypes.string.isRequired,
  showExpirationDate: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  expirationDate: PropTypes.string,
};
