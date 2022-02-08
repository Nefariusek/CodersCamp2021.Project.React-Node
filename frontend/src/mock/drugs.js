import Medication from '../model/Medication';

const drugs = [
  new Medication('PILLS', new Date(2023, 0, 1), 'pills', 1, 10, 'pills for headache', '/creditsPills.png'),
  new Medication('SYRUP', new Date(2022, 1, 12), 'syrup', 0, 4, 'syrup for sorethroat', '/apteczka.png'),
  new Medication(
    'PATCHES',
    new Date(2022, 1, 20),
    'patches',
    0,
    10,
    'patches for bleeding and other small injuries',
    '/creditsPills.png',
  ),
  new Medication('INHALER', new Date(2022, 4, 1), 'inhaler', 1, 10, 'basic inhaler for asthma', '/creditsPills.png'),
];

export default drugs;
