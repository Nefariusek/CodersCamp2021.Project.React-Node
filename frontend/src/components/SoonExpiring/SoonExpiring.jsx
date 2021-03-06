import './SoonExpiring.scss';

import { Button, Modal, Typography } from '@mui/material';
import { useContext, useState } from 'react';

import drugs from '../../mock/drugs';
import buttonStyles from '../Button/button.module.scss';
import Pill from '../Pill/Pill';
import SettingsContext from '../SettingsContext/SettingsContext';

drugs.sort((a, b) => (a.daysUntilExpiration() > b.daysUntilExpiration() ? 1 : -1));

const ExpiringDrugs = ({ drugsNumber }) => {
  const drugsSorted = [...drugs].sort((a, b) => a.daysUntilExpiration() - b.daysUntilExpiration());
  return (
    <div className="soon-expiring-drugs-list">
      {drugsSorted.map((drug, index) => {
        if (index < drugsNumber && drug.daysUntilExpiration() < 30) {
          return (
            <div key={drug.nameOfMedication} className="soon-expiring-medication">
              <Pill
                className="soonExpiring"
                key={drug.nameOfMedication}
                typeOfMedication={drug.type}
                name={drug.nameOfMedication}
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
  const { settings, setSettings } = useContext(SettingsContext);
  const drugsNumber = settings.soonExpiringFilterLength;
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
  const handleClose = () => setIsOpen(false);

  return (
    <div className="soon-expiring-pop-up">
      <Modal open={isOpen} aria-labelledby="soon-expiring-modal">
        <div className="soon-expiring-pop-up">
          <SoonExpiring handleClose={handleClose} />
          <Button variant="contained" className={buttonStyles.Button} onClick={handleClose}>
            UNDERSTOOD
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SoonExpiringPopUp;
