import classNames from 'classnames';
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

const Pill = ({ typeOfMedication, name, showExpirationDate, expirationDate }) => {
  if (showExpirationDate) {
    return (
      <div className={classNames(pillStyles.pill, typeToClass[typeOfMedication])}>
        {name}
        <div className={pillStyles.expiration}>Exp. date: {expirationDate}</div>
      </div>
    );
  }
  return <div className={classNames(pillStyles.pill, typeToClass[typeOfMedication], pillStyles.hide)}>{name}</div>;
};

export default Pill;

Pill.propTypes = {
  typeOfMedication: PropTypes.oneOf(['pills', 'syrup', 'inhaler', 'injection', 'drops', 'patches']).isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  showExpirationDate: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  expirationDate: PropTypes.string,
};
