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
  new Medication('INHALER', new Date(2022, 2, 1), 'inhaler', 1, 10, 'basic inhaler for asthma', '/creditsPills.png'),
  new Medication('INJECTIONS', new Date(2022, 7, 12), 'injections', 0, 4, 'syrup for sorethroat', '/apteczka.png'),
  new Medication('DROPS', new Date(2022, 3, 12), 'drops', 0, 4, 'syrup for sorethroat', '/apteczka.png'),
  new Medication('DIFFERENT PATCHES', new Date(2022, 4, 12), 'patches', 0, 4, 'syrup for sorethroat', '/apteczka.png'),
  new Medication('DIFFERENT PILLS', new Date(2022, 1, 22), 'pills', 0, 4, 'syrup for sorethroat', '/apteczka.png'),
  new Medication('DIFFERENT SYRUP', new Date(2022, 3, 17), 'syrup', 0, 4, 'syrup for sorethroat', '/apteczka.png'),
];

export default drugs;
