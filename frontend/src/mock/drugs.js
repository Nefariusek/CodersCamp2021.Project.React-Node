import { AID_KIT_IMAGE_PATH, PILLS_IMAGE_PATH } from '../constants/images';
import Medication from '../model/Medication';

const drugs = [
  new Medication(
    'VERY LONG NAME MEDICATION',
    new Date(2022, 3, 1),
    'pills',
    1,
    10,
    'pills for headache',
    PILLS_IMAGE_PATH,
    [
    'Morning',
    'Evening',
  ]
  ),
  new Medication('SYRUP', new Date(2022, 1, 12), 'syrup', 0, 4, 'syrup for sorethroat', AID_KIT_IMAGE_PATH, [
    'Morning',
    'Evening',
  ]),
  new Medication('Xanax', new Date(2023, 0, 1), 'pills', 1, 10, 'pills for headache', PILLS_IMAGE_PATH, [
    'Morning',
    'Evening',
  ]),
  new Medication('Sizzurp', new Date(2022, 1, 12), 'syrup', 0, 4, 'syrup for sorethroat', AID_KIT_IMAGE_PATH, ['Noon']),
  new Medication(
    'Pirate EyePatch',
    new Date(2022, 1, 20),
    'patches',
    0,
    10,
    'best patches after ophthalmic surgery',
    PILLS_IMAGE_PATH,
    ['Evening'],
  ),
  new Medication('INHALER', new Date(2022, 2, 1), 'inhaler', 1, 10, 'basic inhaler for asthma', PILLS_IMAGE_PATH, [
    'Morning',
    'Evening',
  ]),
  new Medication('INJECTIONS', new Date(2022, 7, 12), 'injections', 0, 4, 'syrup for sorethroat', AID_KIT_IMAGE_PATH, [
    'Morning',
    'Evening',
  ]),
  new Medication('DROPS', new Date(2022, 3, 12), 'drops', 0, 4, 'syrup for sorethroat', AID_KIT_IMAGE_PATH, [
    'Morning',
    'Evening',
  ]),
];

export default drugs;
