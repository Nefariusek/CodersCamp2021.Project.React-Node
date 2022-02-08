import './SoonExpiring.scss';

import { Typography } from '@mui/material';

import drugs from '../../mock/drugs';
import Pill from '../Pill/Pill';

const ExpiringDrugs = () => {
  return (
    <div className="soon-expiring-drugs-list">
      {drugs.map((drug) => (
        <div className={drug.daysUntilExpiration() < 30 ? 'soon-expiring-medication' : 'not-soon-expiring-medication'}>
          <Pill
            className={drug.daysUntilExpiration() < 30 ? 'soonExpiring' : 'notSoonExpiring'}
            key={drug.name}
            typeOfMedication={drug.category}
            name={drug.name}
            showExpirationDate
            expirationDate={drug.getExpirationDate()}
          />
          <p>DAYS UNTIL EXPIRATION: {drug.daysUntilExpiration()}</p>
        </div>
      ))}
    </div>
  );
};

const SoonExpiring = () => {
  return (
    <div className="soon-expiring">
      <Typography className="soon-expiring-header" variant="h5">
        SOON EXPIRING
      </Typography>
      <ExpiringDrugs />
    </div>
  );
};

export default SoonExpiring;
