import Medication from '../model/Medication';

const drugs = [
  new Medication('pills', new Date(2023, 0, 1), 'pills', 1, 10, 'pills for headache', '/creditsPills.png'),
  new Medication('syrup', new Date(2022, 1, 12), 'syrup', 0, 4, 'syrup for sorethroat', '/apteczka.png'),
  new Medication(
    'patches',
    new Date(2022, 1, 20),
    'patches',
    0,
    10,
    'patches for bleeding and other small injuries',
    '/creditsPills.png',
  ),
];

export default drugs;
