import DateAdapter from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

import { DAYTIMES, validateInput } from './addDrugValidation';

const DAYTIME_HELPER_TEXT = 'Multiple daytime choice possible.';

const initialFormState = {
  drugName: '',
  expirationDate: new Date(),
  daytime: [DAYTIMES[0]],
};

const styles = {
  helper: {
    color: 'black',
    fontSize: '.6em',
  },
};

const useStyles = makeStyles((theme) => {
  return {
    button: {
      width: '200px',
      [theme.breakpoints.down(320)]: {
        width: '130px',
      },
      border: '3px solid black',
      borderRadius: '45px',
    },
    label: {
      paddingTop: '20px',
    },
  };
});

const dateFormat = {
  monthFirst: 'MM/dd/yyyy',
  dayFirst: 'dd/MM/yyyy',
};

const AddDrugForm = (props) => {
  const classes = useStyles();
  const { onClose } = props;
  const [formValues, setFormValues] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});

  const handleAddDrugSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formErrors).every((error) => error === '');

    if (isFormValid) {
      alert('Drug added!');
      onClose();
    }
  };

  const handleInput = (name) => (e) => {
    let value = '';

    if (name === 'expirationDate') {
      value = e;
    } else {
      value = e.target.value;
    }

    setFormValues({
      ...formValues,
      [name]: value,
    });

    const errorText = validateInput(name, value);

    setFormErrors({
      ...formErrors,
      [name]: errorText,
    });
  };

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Box
        component="form"
        noValidate
        onSubmit={handleAddDrugSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5,
        }}
      >
        <Grid container spacing={2} mb={5}>
          <Grid item xs={12}>
            <TextField
              label="DRUG NAME"
              name="drugName"
              id="drugName"
              variant="filled"
              required
              fullWidth
              autoFocus
              color="secondary"
              value={formValues.drugName}
              onChange={handleInput('drugName')}
              onBlur={handleInput('drugName')}
              error={!!formErrors.drugName}
              helperText={formErrors.drugName ? formErrors.drugName : ''}
              FormHelperTextProps={{ style: styles.helper }}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="EXPIRATION DATE"
                name="expirationDate"
                id="expiration-date"
                openTo="day"
                allowSameDateSelection
                inputFormat={dateFormat.dayFirst}
                value={formValues.expirationDate}
                onChange={handleInput('expirationDate')}
                onBlur={handleInput('expirationDate')}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    fullWidth
                    variant="filled"
                    color="secondary"
                    error={!!formErrors.expirationDate}
                    helperText={formErrors.expirationDate ? formErrors.expirationDate : ''}
                    FormHelperTextProps={{ style: styles.helper }}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <FormControl required fullWidth>
              <InputLabel id="daytime-select-label" className={classes.label} shrink color="label">
                DAYTIME
              </InputLabel>
              <Select
                labelId="daytime-select-label"
                label="DAYTIME"
                name="daytime"
                id="daytime-select"
                required
                variant="filled"
                multiple
                value={formValues.daytime}
                onChange={handleInput('daytime')}
                onBlur={handleInput('daytime')}
                error={!!formErrors.daytime}
              >
                {DAYTIMES.map((daytime) => (
                  <MenuItem key={daytime} value={daytime}>
                    {daytime}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText style={styles.helper}>
                {formErrors.daytime ? formErrors.daytime : DAYTIME_HELPER_TEXT}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" align="center">
          <Grid item xs={12} md={4} mb={2}>
            <Button variant="contained" color="secondary" className={classes.button} onClick={onClose}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} md={4} mb={2}>
            <Button type="submit" variant="contained" color="secondary" className={classes.button}>
              Add drug
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddDrugForm;
