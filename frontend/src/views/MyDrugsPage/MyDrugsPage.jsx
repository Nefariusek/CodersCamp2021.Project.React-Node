import './MyDrugsPage.scss';
import '../../components/Pill/Pill.module.scss';

import { Button, Typography } from '@mui/material';
import React, { memo, useContext, useState } from 'react';

import useGet from '../../api/useGet';
import DrugModal from '../../components/AddOrUpdateDrug/DrugModal';
import buttonStyles from '../../components/Button/Button.module.scss';
import LoginContext from '../../components/LoginContext/LoginContext';
import PopupModal from '../../components/PopupModal/PopupModal';
import { AID_KIT_IMAGE_PATH } from '../../constants/images';
import { BASE_URL, DEFAULT_HEADERS, REST_METHOD_PATCH } from '../../constants/restResources';

const initialDescription = 'CHOOSE A DRUG TO SHOW THE DESCRIPTION';
const initialImageSource = AID_KIT_IMAGE_PATH;

const MyDrugsPage = () => {
  const auth = useContext(LoginContext);
  const USER_ID = auth.userData.profileRef;
  const [description, setDescription] = useState(initialDescription);
  const [photoSource, setPhotoSource] = useState(initialImageSource);
  const [drugSelected, setDrugSelected] = useState(null);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isMsgModalOpen, setIsMsgModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const medications = useGet(`${BASE_URL}api/profiles/${USER_ID}/meds`).data;

  const errorModalStateObject = {
    isModalOpen: isErrorOpen,
    setIsModalOpen: setIsErrorOpen,
  };

  const msgModalStateObject = {
    isModalOpen: isMsgModalOpen,
    setIsModalOpen: setIsMsgModalOpen,
  };

  const ShowUpdateButton = memo(({ isDescription }) => {
    if (isDescription !== initialDescription) {
      return <DrugModal drugAction={patchMedication} actionName="Update" />;
    }
    return <div />;
  });

  const MedicationButtons = memo(({ meds }) => {
    if (meds === null) {
      return <div className="drugs-list" />;
    }
    return (
      <div className="drugs-list">
        {meds.map(({ nameOfMedication }) => (
          <Button onClick={showDescription} key={nameOfMedication} variant="contained" className={buttonStyles.Button}>
            {nameOfMedication}
          </Button>
        ))}
      </div>
    );
  });

  async function patchMedication(drug) {
    const drugName = drugSelected;
    let id;
    let updatedDrug;
    medications.forEach((medication) => {
      if (medication.nameOfMedication.toUpperCase() === drugName) {
        console.log(medication);
        updatedDrug = medication;
        id = medication._id;
        console.log(id);
      }
    });
    drug.id = id;
    console.log(drug);
    const requestBody = {
      nameOfMedication: drug.nameOfMedication,
      quantity: drug.quantity,
      dosage: drug.dosage,
      expirationDate: drug.expirationDate,
      description: drug.description,
    };
    try {
      const response = await fetch(`${URL}api/medications/${id}`, {
        method: REST_METHOD_PATCH,
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        response.json();
        setIsMsgModalOpen(true);
      } else {
        setErrorMsg('Medication was not updated.');
        setIsErrorOpen(true);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.toString());
      setIsErrorOpen(true);
    }
  }

  const showDescription = (selectedDrug) => {
    setDrugSelected(selectedDrug.target.innerText);
    const foundDrug = medications.find(
      ({ nameOfMedication }) => nameOfMedication.toUpperCase() === selectedDrug.target.innerText,
    );
    const readyDescription = `NAME: ${foundDrug.nameOfMedication} \n EXPIRATION DATE: ${foundDrug.expirationDate.substr(
      0,
      10,
    )} \n DESCRIPTION: ${foundDrug.description} \n DOSAGE: ${foundDrug.dosage} \n QUANTITY: ${foundDrug.quantity}`;
    setDescription(readyDescription);
  };

  return (
    <div className="my-drugs-page">
      <Typography className="header-h2" variant="h2" color="title.main">
        YOUR DRUGS
      </Typography>
      <PopupModal message={errorMsg} type="error" modalState={errorModalStateObject} />
      <PopupModal message="Medication updated!" type="success" modalState={msgModalStateObject} />
      <div className="drugs-container">
        <MedicationButtons meds={medications} />
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
