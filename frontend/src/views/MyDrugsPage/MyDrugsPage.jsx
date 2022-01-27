import './MyDrugsPage.scss';
import '../../components/Pill/Pill.module.scss';

import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

import buttonStyles from '../../components/Button/button.module.scss';

const drugs = [
  { type: 'pills', name: 'rutinoskorbin', expirationDate: '01.01', notes: 'note', quantity: '10' },
  { type: 'syrup', name: 'syrop', expirationDate: '02.02', notes: '', quantity: '4' },
  { type: 'patches', name: 'plastry', expirationDate: '04.04', notes: 'Plastry na skaleczenia', quantity: '10' },
];

const MyDrugsPage = () => {
  const [description, setDescription] = useState('');

  const showDescription = (selectedDrug) => {
    drugs.forEach((drug) => {
      const drugArray = Object.entries(drug);
      if (selectedDrug.target.innerText === drugArray[1][1].toUpperCase()) {
        const readyDescription = `name: ${drugArray[1][1]} expiration date: ${drugArray[2][1]} notes: ${drugArray[3][1]} quantity: ${drugArray[4][1]}`;
        setDescription(readyDescription);
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
        <div className="drug-description">{description}</div>
      </div>
    </div>
  );
};
export default MyDrugsPage;
