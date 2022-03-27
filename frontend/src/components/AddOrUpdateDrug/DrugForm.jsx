import DateAdapter from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useContext, useState } from 'react';

import { DAYTIMES } from '../../constants/picklistValues';
import Medication from '../../model/Medication';
import LoginContext from '../LoginContext/LoginContext';
import { validateInput } from './drugValidation';

const DAYTIME_HELPER_TEXT = 'Multiple daytime choice possible.';

const styles = {
  helper: {
    fontSize: '.8em',
    color: 'helper.main',
  },
  error: {
    fontSize: '.8em',
    color: 'error.main',
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

const DrugForm = ({ onClose, drugAction, actionName = 'Add' }) => {
  const classes = useStyles();

  const { medicationCategories } = useContext(LoginContext);

  const initialFormState = {
    drugName: '',
    drugType: medicationCategories[0].name,
    drugQuantity: medicationCategories[0].possibleQuantity[0],
    drugPackages: 0,
    description: '',
    expirationDate: new Date(),
    dosage: '',
    daytime: [DAYTIMES[0]],
  };
  const [formValues, setFormValues] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});

  const handleDrugSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formErrors).every((error) => error === '');
    const defaultImage = medicationCategories.length ? medicationCategories[0].icon : '';

    if (isFormValid) {
      const drug = new Medication(
        'id',
        formValues.drugName,
        formValues.expirationDate,
        formValues.drugType,
        formValues.dosage,
        formValues.drugQuantity,
        formValues.description,
        defaultImage,
        formValues.daytime,
      );
      drugAction(drug);
      onClose();
    }
  };

  const handleInput = (name) => (e) => {
    let value = '';

    if (name === 'drugType') {
      setFormValues({
        ...formValues,
        drugType: e.target.value,
        drugQuantity: medicationCategories.find((q) => e.target.value === q._id).possibleQuantity[0],
      });
    } else {
      if (name === 'expirationDate') {
        value = e;
      } else {
        value = e.target.value;
      }

      setFormValues({
        ...formValues,
        [name]: value,
      });
    }

    const errorText = validateInput(name, value);

    setFormErrors({
      ...formErrors,
      [name]: errorText,
    });
  };

  // const currentCategory = medicationCategories.find((category) => category._id === formValues.drugType);

  return (
    <Container maxWidth="md">
      <Box
        component="form"
        noValidate
        onSubmit={handleDrugSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 4,
        }}
      >
        <Grid container spacing={2} mb={2}>
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

          <Grid item xs={12} sm={4}>
            <FormControl required fullWidth>
              <InputLabel id="drugtype-select-label" className={classes.label} shrink color="label">
                TYPE
              </InputLabel>
              <Select
                labelId="drugtype-select-label"
                label="TYPE"
                name="drugType"
                id="drugtype-select"
                required
                variant="filled"
                value={formValues.drugType}
                onChange={handleInput('drugType')}
                onBlur={handleInput('drugType')}
              >
                {medicationCategories.map((medicationCategory) => (
                  <MenuItem key={medicationCategory._id} value={medicationCategory.name}>
                    {medicationCategory.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl required fullWidth>
              <InputLabel id="drug-quantity-select-label" className={classes.label} shrink color="label">
                QUANTITY
              </InputLabel>
              <Select
                labelId="drug-quantity-select-label"
                label="QUANTITY"
                name="drugQuantity"
                id="drug-quantity-select"
                required
                variant="filled"
                value={formValues.drugQuantity}
                onChange={handleInput('drugQuantity')}
                onBlur={handleInput('drugQuantity')}
              >
                {medicationCategories
                  .find((category) => category.name === formValues.drugType)
                  ?.possibleQuantity.map((q) => (
                    <MenuItem key={q} value={q}>
                      {q} {medicationCategories.find((category) => category.name === formValues.drugType).unit}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="PACKAGES"
              name="drugPackages"
              id="drugPackages"
              type="number"
              variant="filled"
              required
              fullWidth
              color="secondary"
              value={formValues.drugPackages}
              onChange={handleInput('drugPackages')}
              onBlur={handleInput('drugPackages')}
              InputProps={{ inputProps: { min: 0 } }}
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
            <TextField
              label="DESCRIPTION"
              name="description"
              id="description"
              variant="filled"
              fullWidth
              color="secondary"
              value={formValues.description}
              onChange={handleInput('description')}
              onBlur={handleInput('description')}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="DOSAGE"
              name="dosage"
              id="dosage"
              variant="filled"
              required
              fullWidth
              color="secondary"
              value={formValues.dosage}
              onChange={handleInput('dosage')}
              onBlur={handleInput('dosage')}
              error={!!formErrors.dosage}
              helperText={formErrors.dosage ? formErrors.dosage : ''}
              FormHelperTextProps={{ style: styles.helper }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
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
                <Typography variant="caption" color={formErrors.daytime ? 'error.main' : 'helper.main'}>
                  {formErrors.daytime ? formErrors.daytime : DAYTIME_HELPER_TEXT}
                </Typography>
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" align="center">
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <Button type="submit" variant="contained" color="secondary" className={classes.button}>
              {actionName} drug
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb={2}>
            <Button variant="contained" color="secondary" className={classes.button} onClick={onClose}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DrugForm;
