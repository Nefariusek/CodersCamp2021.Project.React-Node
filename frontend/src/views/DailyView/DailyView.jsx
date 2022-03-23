import './DailyView.scss';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';

import postData from '../../api/postData';
import DrugModal from '../../components/AddOrUpdateDrug/DrugModal';
import ModalContext from '../../components/ModalContext/ModalContext';
import Pill from '../../components/Pill/Pill';
import PopupModal from '../../components/PopupModal/PopupModal';
import { DAYTIMES } from '../../constants/picklistValues';
import { BASE_URL } from '../../constants/restResources';
import drugs from '../../mock/drugs';
import DatePicker from './DatePicker';

const TITLE = `DAILY DRUGS`;

const DailyDrugs = () => {
  const [drugList, setDrugList] = React.useState(drugs);
  const modalState = useContext(ModalContext);
  mess;

  const addDrug = async (drug) => {
    const { data, error } = await postData(`${BASE_URL}/api/medications`, drug);
    if (!error) {
      setDrugList([...drugList, drug]);
      modalState.setIsModalOpen(true);
      message = 'cool';
    } else {
      modalState.setIsModalOpen(true);
      message = 'buba';
    }
    return message;
  };
  // const addDrug = async (drug) => {
  //   const { data, error } = await postData(`${BASE_URL}/api/medications`, drug);
  //   if (!error) {
  //     setDrugList([...drugList, drug]);
  //   }

  //   return error;
  // };

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
                      key={`${drug.name}_${drug.expirationDate}`}
                      typeOfMedication={drug.type}
                      name={drug.name}
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
        <PopupModal message={message} type="error" modalState={modalState} />
      </div>
    </div>
  );
};

export default DailyDrugs;
