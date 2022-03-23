import models from './models.js';

const MedicationCategory = models.medicationCategory;
const Profile = models.profile;

const exampleDate = new Date(1995, 11, 17);
const exampleDate2 = new Date(2021, 11, 17);
const exampleDate3 = new Date(2022, 11, 17);

const MEDICATION_CATEGORY1 = {
  name: 'patches',
  unit: 'pcs',
  color: 'pink',
  icon: './bandage-solid.svg',
};

const MEDICATION_CATEGORY2 = {
  name: 'pills',
  unit: 'pcs',
  color: 'blue',
  icon: './pills-solid.svg',
};

const medicationCategory1 = new MedicationCategory(MEDICATION_CATEGORY1);
const medicationCategory2 = new MedicationCategory(MEDICATION_CATEGORY2);

export const MEDICATION1 = {
  nameOfMedication: 'Pirate eye patch',
  quantity: 15,
  addDate: exampleDate2,
  dosage: 'When needed',
  category: medicationCategory1,
  expirationDate: exampleDate3,
  description: 'Used on your eye',
};
export const MEDICATION2 = {
  nameOfMedication: 'XANAX',
  quantity: 30,
  addDate: exampleDate2,
  dosage: 'Once in a while',
  category: medicationCategory2,
  expirationDate: exampleDate3,
  description: 'All you need is love',
};

export const ADMIN_PROFILE = {
  age: 25,
  firstName: 'exampleName',
  lastName: 'exampleLastName',
  registerDate: exampleDate,
  onlineDate: exampleDate2,
  medictionList: [MEDICATION1, MEDICATION2],
};

const adminProfile = new Profile(ADMIN_PROFILE);
export const ADMIN_USER = {
  username: 'exampleName',
  email: 'exapleEmail@gmail.com',
  password: 'examplePswd!123',
  isAdmin: true,
  profileRef: adminProfile,
  isVerified: true,
};

export const USER_PROFILE = {
  age: 25,
  firstName: 'exampleName1',
  lastName: 'exampleLastName1',
  registerDate: exampleDate,
  onlineDate: exampleDate2,
  medicationList: [MEDICATION1],
};

const userProfile = new Profile(USER_PROFILE);
export const USER_USER = {
  username: 'exampleName1',
  email: 'exapleEmail1@gmail.com',
  password: 'examplePswd!123',
  isAdmin: false,
  profileRef: userProfile,
  isVerified: false,
};
