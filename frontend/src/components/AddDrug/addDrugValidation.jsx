export const DAYTIMES = ['Morning', 'Noon', 'Evening'];

const ErrorMessages = {
  drugName: {
    EMPTY: "Drug name can't be empty.",
  },
  expirationDate: {
    EMPTY: "Expiration date can't be empty.",
    ALLOWED_DATE: 'Expiration date is earlier than today.',
    NOT_VALID_DATE: 'Expiration date is not valid date.',
  },
  daytime: {
    EMPTY: "Daytime can't be empty.",
  },
};

export const validateInput = (name, value) => {
  let result = '';

  switch (name) {
    case 'drugName':
      result = validateDrugName(value);
      break;
    case 'expirationDate':
      result = validateExpirationDate(value);
      break;
    case 'daytime':
      result = validateDaytime(value);
      break;
    default:
      break;
  }

  return result;
};

const validateDrugName = (value) => {
  const errorText = value.trim() !== '' ? '' : ErrorMessages.drugName.EMPTY;
  return errorText;
};

const validateExpirationDate = (value) => {
  const today = new Date();
  let errorText = '';

  if (value === null) {
    errorText = ErrorMessages.expirationDate.EMPTY;
  } else {
    const isEarlierDate = value.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
    const isNotValidDate = isNaN(value.getTime());
    if (isEarlierDate) {
      errorText = ErrorMessages.expirationDate.ALLOWED_DATE;
    } else if (isNotValidDate) {
      errorText = ErrorMessages.expirationDate.NOT_VALID_DATE;
    }
  }

  return errorText;
};

const validateDaytime = (value) => {
  const errorText = !(value.length === 0) ? '' : ErrorMessages.daytime.EMPTY;
  return errorText;
};
