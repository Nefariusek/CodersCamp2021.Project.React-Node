import './DailyView.scss';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

import postData from '../../api/postData';
import DrugModal from '../../components/AddOrUpdateDrug/DrugModal';
import Pill from '../../components/Pill/Pill';
import { DAYTIMES } from '../../constants/picklistValues';
import { BASE_URL } from '../../constants/restResources';
import drugs from '../../mock/drugs';
import DatePicker from './DatePicker';

const TITLE = `DAILY DRUGS`;

const DailyDrugs = () => {
  const [drugList, setDrugList] = React.useState(drugs);

  const addDrug = async (drug) => {
    const { data, error } = await postData(`${BASE_URL}api/medications`, {
      nameOfMedication: drug.nameOfMedication,
      quantity: drug.quantity,
      addDate: drug.addDate,
      dosage: drug.dosage,
      category: drug.type,
      expirationDate: drug.expirationDate,
      description: drug.description,
    });
    if (!error) {
      setDrugList([...drugList, drug]);
    }
  };

  return (
    <div className="daily-view-container">
      <div className="title-container">
        <Typography align="center" className="daily-drugs-title" variant="h2" color="title.main">
          {TITLE}
        </Typography>
      </div>
      <div className="content-container">
        <div className="daily-datepicker-container">
          <DatePicker />
        </div>
        <div className="drug-box-container">
          <Box className="drug-box" sx={{ display: 'flex', borderRadius: 15 }}>
            {DAYTIMES.map((daytime) => (
              <Box className="drug-box-compartment" key={daytime} sx={{ borderRadius: 10, margin: 3 }}>
                <Typography align="center" className="time-of-day" variant="h6">
                  {daytime}
                </Typography>
                {drugList
                  .filter((drug) => drug.daytime.includes(daytime))
                  .map((drug) => (
                    <Pill
                      key={`${drug.nameOfMedication}_${drug.expirationDate}`}
                      typeOfMedication={drug.type}
                      name={drug.nameOfMedication}
                      showExpirationDate={false}
                      expirationDate={drug.expirationDate}
                    />
                  ))}
              </Box>
            ))}
          </Box>
        </div>
      </div>
      <div className="button-add-drug">
        <DrugModal drugAction={addDrug} />
        {/* <PopupModal message={message} type="error" modalState={modalState} /> */}
      </div>
    </div>
  );
};

export default DailyDrugs;
