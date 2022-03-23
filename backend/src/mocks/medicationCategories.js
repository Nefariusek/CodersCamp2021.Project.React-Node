import {
  PILLS_COLOR,
  SYRUP_COLOR,
  INHALER_COLOR,
  INJECTION_COLOR,
  DROPS_COLOR,
  PATCHES_COLOR,
} from '../constants/MedicationCategory/pillColors.js';
import { QUANTITY_UNIT, VOLUME_UNIT } from '../constants/MedicationCategory/medsUnits.js';
import {
  PILLS_ICON,
  SYRUP_ICON,
  INHALER_ICON,
  INJECTION_ICON,
  DROPS_ICON,
  PATCHES_ICON,
} from '../constants/MedicationCategory/medsIcons.js';
import {
  DROPS_MED_TYPE,
  INHALER_MED_TYPE,
  INJECTION_MED_TYPE,
  PATCHES_MED_TYPE,
  PILL_MED_TYPE,
  SYRUP_MED_TYPE,
} from '../constants/MedicationCategory/medTypes.js';
const COLORS = [PILLS_COLOR, SYRUP_COLOR, INHALER_COLOR, INJECTION_COLOR, DROPS_COLOR, PATCHES_COLOR];
const ICONS = [PILLS_ICON, SYRUP_ICON, INHALER_ICON, INJECTION_ICON, DROPS_ICON, PATCHES_ICON];
const UNITS = [QUANTITY_UNIT, VOLUME_UNIT];
const MEDICATION_CATEGORIES = [
  DROPS_MED_TYPE,
  SYRUP_MED_TYPE,
  INHALER_MED_TYPE,
  INJECTION_MED_TYPE,
  PATCHES_MED_TYPE,
  PILL_MED_TYPE,
];

const MOCK_MEDICATION_CATEGORIES = [
  {
    name: DROPS_MED_TYPE,
    unit: QUANTITY_UNIT,
    color: DROPS_COLOR,
    possibleQuantity: [10, 15, 20],
    icon: DROPS_ICON,
  },
  {
    name: SYRUP_MED_TYPE,
    unit: VOLUME_UNIT,
    color: SYRUP_COLOR,
    possibleQuantity: [100, 150, 200],
    icon: SYRUP_ICON,
  },
  {
    name: INJECTION_MED_TYPE,
    unit: VOLUME_UNIT,
    color: INJECTION_COLOR,
    possibleQuantity: [10, 20, 30],
    icon: INJECTION_ICON,
  },
  {
    name: INHALER_MED_TYPE,
    unit: VOLUME_UNIT,
    color: INHALER_COLOR,
    possibleQuantity: [1, 2, 5, 10, 20],
    icon: INJECTION_ICON,
  },
  {
    name: PILL_MED_TYPE,
    unit: QUANTITY_UNIT,
    color: PILLS_COLOR,
    possibleQuantity: [30, 60, 90, 120],
    icon: PILLS_ICON,
  },
  {
    name: PATCHES_MED_TYPE,
    unit: QUANTITY_UNIT,
    color: PATCHES_COLOR,
    possibleQuantity: [1, 2, 10, 20, 30],
    icon: PATCHES_ICON,
  },
];

export default MOCK_MEDICATION_CATEGORIES;
