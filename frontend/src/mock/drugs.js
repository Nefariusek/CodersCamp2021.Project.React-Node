import Medication from '../model/Medication';

const drugs = [
  new Medication('Xanax', new Date(2023, 0, 1), 'pills', 1, 10, 'pills for headache', '/creditsPills.png', [
    'Morning',
    'Evening',
  ]),
  new Medication('Sizzurp', new Date(2022, 1, 12), 'syrup', 0, 4, 'syrup for sorethroat', '/apteczka.png', ['Noon']),
  new Medication(
    'Pirate EyePatch',
    new Date(2022, 1, 20),
    'patches',
    0,
    10,
    'best patches after ophthalmic surgery',
    '/creditsPills.png',
    ['Evening'],
  ),
];

export default drugs;
