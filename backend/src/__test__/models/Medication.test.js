import Medication from '../../models/Medication';

describe('Medication model test', () => {
  const date = new Date().getDay();

  it('Medication with no given addDate has todays date', () => {
    const med = new Medication();
    const addDate = med.addDate.getDay();
    expect(addDate).toBe(date);
  });
});
