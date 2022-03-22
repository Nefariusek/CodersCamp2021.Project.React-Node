import './MyDrugsPage.scss';
import '../../components/Pill/Pill.module.scss';

import { Button, Typography } from '@mui/material';
import React, { memo, useState } from 'react';

import DrugModal from '../../components/AddOrUpdateDrug/DrugModal';
import buttonStyles from '../../components/Button/Button.module.scss';
import PopupModal from '../../components/PopupModal/PopupModal';
import { AID_KIT_IMAGE_PATH } from '../../constants/images';
import { DEFAULT_HEADERS, REST_METHOD_PATCH } from '../../constants/restResources';
import { URL } from '../../constants/url';
import drugs from '../../mock/drugs';

const initialDescription = 'CHOOSE A DRUG TO SHOW THE DESCRIPTION';
const initialImageSource = AID_KIT_IMAGE_PATH;

const MyDrugsPage = () => {
  const [description, setDescription] = useState(initialDescription);
  const [photoSource, setPhotoSource] = useState(initialImageSource);
  const [drugSelected, setDrugSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const ShowUpdateButton = memo(({ isDescription }) => {
    if (isDescription !== initialDescription) {
      return <DrugModal drugAction={patchMedication} actionName="Update" />;
    }
    return <div />;
  });

  // At this moment works only if one of mock medications has the same id as any in the collection, because there is no functionality for getting all the user's medications.
  async function patchMedication(drug) {
    const drugName = drugSelected;
    let id;
    let updatedDrug;
    drugs.forEach((medication) => {
      if (medication.name.toUpperCase() === drugName) {
        updatedDrug = medication;
        id = medication.id;
      }
    });
    drug.id = id;
    drug.addDate = updatedDrug.addDate;
    const requestBody = {
      nameOfMedication: drug.name,
      quantity: drug.quantity,
      addDate: drug.addDate,
      dosage: drug.dosage,
      expirationDate: drug.expirationDate,
    };
    try {
      const response = await fetch(`${URL}api/medications/${id}`, {
        method: REST_METHOD_PATCH,
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        response.json();
        alert('Medication updated!');
      } else {
        setErrorMsg('Medication was not updated.');
        setOpen(true);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.toString());
      setOpen(true);
    }
  }

  const showDescription = (selectedDrug) => {
    setDrugSelected(selectedDrug.target.innerText);
    const foundDrug = drugs.find(({ name }) => name.toUpperCase() === selectedDrug.target.innerText);
    const readyDescription = `NAME: ${foundDrug.name}, TYPE: ${
      foundDrug.type
    } \n EXPIRATION DATE: ${foundDrug.getExpirationDate()} \n INFO: ${foundDrug.description} \n DOSAGE: ${
      foundDrug.dosage
    } (${foundDrug.daytime}) \n QUANTITY: ${foundDrug.quantity}`;
    setDescription(readyDescription);
    setPhotoSource(foundDrug.img);
  };
  const modalStateObject = {
    isModalOpen: open,
    setIsModalOpen: setOpen,
  };

  return (
    <div className="my-drugs-page">
      <Typography className="header-h2" variant="h2" color="title.main">
        YOUR DRUGS
      </Typography>
      <PopupModal message={errorMsg} type="error" modalState={modalStateObject} />
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
          <ShowUpdateButton isDescription={description} />
        </div>
      </div>
    </div>
  );
};
export default MyDrugsPage;
