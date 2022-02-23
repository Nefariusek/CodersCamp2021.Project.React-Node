import './SoonExpiring.scss';

import { Button, Typography } from '@mui/material';
import { useState } from 'react';

import getSettings from '../../api/settings/getSettings';
import drugs from '../../mock/drugs';
import Pill from '../Pill/Pill';

drugs.sort((a, b) => (a.daysUntilExpiration() > b.daysUntilExpiration() ? 1 : -1));

const ExpiringDrugs = ({ drugsNumber }) => {
  const drugsSorted = [...drugs].sort((a, b) => a.daysUntilExpiration() - b.daysUntilExpiration());
  return (
    <div className="soon-expiring-drugs-list">
      {drugsSorted.map((drug, index) => {
        if (index < drugsNumber && drug.daysUntilExpiration() < 30) {
          return (
            <div key={drug.name} className="soon-expiring-medication">
              <Pill
                className="soonExpiring"
                key={drug.name}
                typeOfMedication={drug.type}
                name={drug.name}
                showExpirationDate
                expirationDate={drug.getExpirationDate()}
              />
              {drug.daysUntilExpiration() < 0 ? (
                <p>EXPIRED</p>
              ) : (
                <p>DAYS UNTIL EXPIRATION: {drug.daysUntilExpiration()}</p>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

const SoonExpiring = ({ handleClose }) => {
  const drugsNumber = getSettings().soonExpiringFilterLength;
  return (
    <div className="soon-expiring">
      <div className="soon-expiring-close">
        <Typography className="soon-expiring-close-header" variant="h5">
          SOON EXPIRING
        </Typography>
        <Button className="close-icon" onClick={handleClose}>
          X
        </Button>
      </div>
      <ExpiringDrugs drugsNumber={drugsNumber} />
    </div>
  );
};

const SoonExpiringPopUp = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return <div className="soon-expiring-pop-up"> {isOpen && <SoonExpiring handleClose={togglePopup} />}</div>;
};

export default SoonExpiringPopUp;
