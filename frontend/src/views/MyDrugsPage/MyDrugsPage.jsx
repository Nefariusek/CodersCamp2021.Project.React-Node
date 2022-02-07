import './MyDrugsPage.scss';
import '../../components/Pill/Pill.module.scss';

import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

import buttonStyles from '../../components/Button/Button.module.scss';
import { AID_KIT_IMAGE_PATH } from '../../constants/images';
import drugs from '../../mock/drugs';

const initialDescription = 'CHOOSE A DRUG TO SHOW THE DESCRIPTION';
const initialImageSource = AID_KIT_IMAGE_PATH;

const MyDrugsPage = () => {
  const [description, setDescription] = useState(initialDescription);
  const [photoSource, setPhotoSource] = useState(initialImageSource);

  const showDescription = (selectedDrug) => {
    const foundDrug = drugs.find(({ name }) => name.toUpperCase() === selectedDrug.target.innerText);
    const readyDescription = `NAME: ${foundDrug.name} \n EXPIRATION DATE: ${foundDrug.expirationDate} \n INFO: ${foundDrug.notes} \n QUANTITY: ${foundDrug.quantity}`;
    setDescription(readyDescription);
    setPhotoSource(foundDrug.photoSource);
  };

  return (
    <div className="my-drugs-page">
      <Typography className="header-h2" variant="h2">
        YOUR DRUGS
      </Typography>
      <div className="drugs-container">
        <div className="drugs-list">
          {drugs.map(({ name }) => (
            <Button onClick={showDescription} key={name} variant="contained" className={buttonStyles.Button}>
              {name}
            </Button>
          ))}
        </div>
        <div className="drug-description">
          <Typography className="drug-description-header" variant="h4">
            DRUG DESCRIPTION
          </Typography>
          <p className="drug-description-details">{description}</p>
          <img className="drug-description-image" src={photoSource} alt="Medication" width="250" />
        </div>
      </div>
    </div>
  );
};
export default MyDrugsPage;
