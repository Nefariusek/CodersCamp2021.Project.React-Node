import './MyDrugsPage.scss';
import '../../components/Pill/Pill.module.scss';

import { Button, Typography } from '@mui/material';
import React, { memo, useState } from 'react';

import usePutData from '../../api/usePutData';
import DrugModal from '../../components/AddOrUpdateDrug/DrugModal';
import buttonStyles from '../../components/Button/Button.module.scss';
import { AID_KIT_IMAGE_PATH } from '../../constants/images';
import drugs from '../../mock/drugs';

const initialDescription = 'CHOOSE A DRUG TO SHOW THE DESCRIPTION';
const initialImageSource = AID_KIT_IMAGE_PATH;

const MyDrugsPage = () => {
  const [description, setDescription] = useState(initialDescription);
  const [photoSource, setPhotoSource] = useState(initialImageSource);
  const [descriptionShown, setDescriptionShown] = useState(false);
  const [selected, setSelected] = useState(null);

  const ShowUpdateButton = memo(({ isDescription }) => {
    console.log(isDescription);
    if (isDescription) {
      return <DrugModal drugAction={useUpdateDrug} actionName="Update" />;
    }
    return <div />;
  });

  const useUpdateDrug = () => {
    const drugName = selected;
    const data = usePutData('http://localhost:8080/api/medications/6235e46a9b538e44086277c0', {
      nameOfMedication: 'nowaNazwa',
      quantity: 10,
      addDate: '2021-12-16T23:00:00.000Z',
      dosage: 'codziennie',
      category: '6235e46a9b538e44086277ba',
      expirationDate: '2020-01-02',
    });
    console.log(drugName);
    return data;
  };

  const showDescription = (selectedDrug) => {
    console.log(selectedDrug.target.innerText);
    setSelected(selectedDrug.target.innerText);
    const foundDrug = drugs.find(({ name }) => name.toUpperCase() === selectedDrug.target.innerText);
    const readyDescription = `NAME: ${foundDrug.name}, TYPE: ${
      foundDrug.type
    } \n EXPIRATION DATE: ${foundDrug.getExpirationDate()} \n INFO: ${foundDrug.description} \n DOSAGE: ${
      foundDrug.dosage
    } (${foundDrug.daytime}) \n QUANTITY: ${foundDrug.quantity}`;
    setDescription(readyDescription);
    setPhotoSource(foundDrug.img);
    setDescriptionShown(true);
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
          <ShowUpdateButton isDescription={descriptionShown} />
        </div>
      </div>
    </div>
  );
};
export default MyDrugsPage;
