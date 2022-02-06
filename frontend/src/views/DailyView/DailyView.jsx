import './DailyView.scss';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

import AddDrugModal from '../../components/AddDrug/AddDrugModal';
import buttonStyles from '../../components/Button/Button.module.scss';
import Pill from '../../components/Pill/Pill';
import drugs from '../../mock/drugs';
import DatePicker from './DatePicker';

const TITLE = `DAILY DRUGS`;
const DAYTIMES = [`MORNING`, `NOON`, `EVENING`];
const DailyDrugs = () => {
  const [drugList, setDrugList] = React.useState(drugs);

  const addDrug = (drug) => {
    setDrugList([...drugList, drug]);
  };

  console.log(drugList);
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
              <Box className="drug-box-compartment" sx={{ borderRadius: 10, margin: 3 }}>
                <Typography align="center" className="time-of-day" variant="h6">
                  {daytime}
                </Typography>
                {drugList.map((drug) =>
                  drug.daytime.map(
                    (dt) =>
                      dt.toUpperCase() === daytime && (
                        <Pill
                          typeOfMedication={drug.type}
                          name={drug.name}
                          showExpirationDate={false}
                          expirationDate={drug.expirationDate}
                        />
                      ),
                  ),
                )}
              </Box>
            ))}
          </Box>
        </div>
      </div>
      <div className="button-add-drug">
        <AddDrugModal addDrug={addDrug} />
      </div>
    </div>
  );
};

export default DailyDrugs;
