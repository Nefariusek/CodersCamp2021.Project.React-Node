import Medication, { medicationValidator } from '../../models/Medication';

describe('Medication model test', () => {
  const date = new Date().getDay();

  it('Medication with no given addDate has todays date', () => {
    const med = new Medication();
    const addDate = med.addDate.getDay();
    expect(addDate).toBe(date);
  });
});

describe('Joi validator for medication model', () => {
  let testRequestBody;
  let res;
  let err;
  beforeEach(() => {
    err = undefined;
    testRequestBody = {
      body: {
        nameOfMedication: undefined,
        quantity: undefined,
        addDate: undefined,
        dosage: undefined,
        expirationDate: undefined,
      },
    };
  });

  it('Joi validator accepts allowed data', () => {
    testRequestBody.body.nameOfMedication = 'xanax';
    testRequestBody.body.quantity = 2;
    testRequestBody.body.addDate = new Date();
    testRequestBody.body.dosage = 'daily';
    testRequestBody.body.expirationDate = new Date();

    medicationValidator(testRequestBody, res, (e) => {
      err = e;
    });
    expect(err).toBeUndefined();
  });

  it('Joi validator rejects wrong values', () => {
    testRequestBody.body.nameOfMedication = 'xa';
    testRequestBody.body.quantity = 0;
    testRequestBody.body.addDate = 332;
    testRequestBody.body.dosage = '3';
    testRequestBody.body.expirationDate = '01.02.2022';

    medicationValidator(testRequestBody, res, (e) => {
      err = e;
    });
    expect(err).not.toBeUndefined();
  });
});
