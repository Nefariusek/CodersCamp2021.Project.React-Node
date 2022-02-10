import './SoonExpiring.scss';

import { Button, ButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';

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
                expirationDate={drug.expirationDate}
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
  const [drugsNumber, setDrugsNumber] = useState(5);

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
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button onClick={() => setDrugsNumber(3)}>THREE</Button>
        <Button onClick={() => setDrugsNumber(5)}>FIVE</Button>
        <Button onClick={() => setDrugsNumber(7)}>SEVEN</Button>
      </ButtonGroup>
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
