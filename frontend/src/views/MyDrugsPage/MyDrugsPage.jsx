import './MyDrugsPage.scss';
import '../../components/Pill/Pill.module.scss';

import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

import buttonStyles from '../../components/Button/button.module.scss';

const drugs = [
  {
    type: 'pills',
    name: 'tabletki',
    expirationDate: '01.01',
    notes: 'tabletki na ból głowy',
    quantity: '10',
    photoSource: '/creditsPills.png',
  },
  {
    type: 'syrup',
    name: 'syrop',
    expirationDate: '02.02',
    notes: 'syrop na kaszel',
    quantity: '4',
    photoSource: '/apteczka.png',
  },
  {
    type: 'patches',
    name: 'plastry',
    expirationDate: '04.04',
    notes: 'Plastry na skaleczenia',
    quantity: '10',
    photoSource: '/creditsPills.png',
  },
];

const MyDrugsPage = () => {
  const [description, setDescription] = useState('CHOOSE A DRUG TO SHOW THE DESCRIPTION');
  const [photoSource, setPhotoSource] = useState('/apteczka.png');

  const showDescription = (selectedDrug) => {
    drugs.forEach((drug) => {
      const drugArray = Object.entries(drug);
      if (selectedDrug.target.innerText === drugArray[1][1].toUpperCase()) {
        const readyDescription = `NAME: ${drugArray[1][1]} \n EXPIRATION DATE: ${drugArray[2][1]} \n INFO: ${drugArray[3][1]} \n QUANTITY: ${drugArray[4][1]}`;
        setDescription(readyDescription);
        setPhotoSource(drugArray[5][1]);
      }
    });
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
