import Medication from '../../model/Medication';

const nowDate = new Date();
const testDrug = new Medication(
  '12345678910',
  'testName',
  new Date(2022, 2, 10),
  'testCategory',
  1,
  10,
  'testDescription',
  'testImage',
  ['Noon'],
  nowDate,
);

test('Medication class has all atributes', () => {
  expect(testDrug.id).toBe('12345678910');
  expect(testDrug.nameOfMedication).toBe('testName');
  expect(testDrug.expirationDate).toStrictEqual(new Date(2022, 2, 10));
  expect(testDrug.type).toBe('testCategory');
  expect(testDrug.dosage).toBe(1);
  expect(testDrug.quantity).toBe(10);
  expect(testDrug.description).toBe('testDescription');
  expect(testDrug.img).toBe('testImage');
  expect(testDrug.daytime).toEqual(['Noon']);
  expect(testDrug.addDate).toEqual(nowDate);
});

test('getExpirationDate method returns date in dd.mm.yyyy format', () => {
  expect(testDrug.getExpirationDate()).toBe('10.03.2022');
});

test('daysUntilExpirationDate method returns integer', () => {
  expect(Number.isInteger(testDrug.daysUntilExpiration())).toBeTruthy();
});
