import './MyDrugsPage.scss';
import '../../components/Pill/Pill.module.scss';

import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

import buttonStyles from '../../components/Button/Button.module.scss';
import UpdateDrugModal from '../../components/UpdateDrug/UpdateDrugModal';
import { AID_KIT_IMAGE_PATH } from '../../constants/images';
import drugs from '../../mock/drugs';

const initialDescription = 'CHOOSE A DRUG TO SHOW THE DESCRIPTION';
const initialImageSource = AID_KIT_IMAGE_PATH;

const MyDrugsPage = () => {
  const [description, setDescription] = useState(initialDescription);
  const [photoSource, setPhotoSource] = useState(initialImageSource);

  const updateDrug = (drug) => {
    console.log(drug);
  };

  const showDescription = (selectedDrug) => {
    const foundDrug = drugs.find(({ name }) => name.toUpperCase() === selectedDrug.target.innerText);
    const readyDescription = `NAME: ${foundDrug.name}, TYPE: ${
      foundDrug.type
    } \n EXPIRATION DATE: ${foundDrug.getExpirationDate()} \n INFO: ${foundDrug.description} \n DOSAGE: ${
      foundDrug.dosage
    } (${foundDrug.daytime}) \n QUANTITY: ${foundDrug.quantity}`;
    setDescription(readyDescription);
    setPhotoSource(foundDrug.img);
  };

  return (
    <div className="my-drugs-page">
      <Typography className="header-h2" variant="h2" color="title.main">
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
          <Typography className="drug-description-header" variant="h4" color="title.light">
            DRUG DESCRIPTION
          </Typography>
          <Typography className="drug-description-details" color="text.main">
            {description}
          </Typography>
          <img className="drug-description-image" src={photoSource} alt="Medication" width="250" />
          <UpdateDrugModal updateDrug={updateDrug} />
        </div>
      </div>
    </div>
  );
};
export default MyDrugsPage;
