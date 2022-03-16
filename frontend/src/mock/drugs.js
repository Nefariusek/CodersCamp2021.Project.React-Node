import { AID_KIT_IMAGE_PATH, PILLS_IMAGE_PATH } from '../constants/images';
import Medication from '../model/Medication';

const drugs = [
  new Medication('Xanax', new Date(2023, 0, 1), 'pills', '1 pill', 10, 'pills for headache', PILLS_IMAGE_PATH, [
    'Morning',
    'Evening',
  ]),
  new Medication(
    'Sizzurp',
    new Date(2021, 1, 12),
    'syrup',
    '1 table spoon',
    4,
    'syrup for sore throat',
    AID_KIT_IMAGE_PATH,
    ['Noon'],
  ),
  new Medication(
    'Pirate EyePatch',
    new Date(2022, 1, 20),
    'patches',
    'as needed',
    10,
    'best patches after ophthalmic surgery',
    PILLS_IMAGE_PATH,
    ['Evening'],
  ),
];

export default drugs;
