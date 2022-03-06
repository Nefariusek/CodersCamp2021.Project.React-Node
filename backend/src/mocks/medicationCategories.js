import {
  PILLS_COLOR,
  SYRUP_COLOR,
  INHALER_COLOR,
  INJECTION_COLOR,
  DROPS_COLOR,
  PATCHES_COLOR,
} from '../constants/MedicationCategory/pillColors';
import { QUANTITY_UNIT, VOLUME_UNIT } from '../constants/MedicationCategory/medsUnits';
import {
  PILLS_ICON,
  SYRUP_ICON,
  INHALER_ICON,
  INJECTION_ICON,
  DROPS_ICON,
  PATCHES_ICON,
} from '../constants/MedicationCategory/medsIcons';
import {
  DROPS_MED_TYPE,
  INHALER_MED_TYPE,
  INJECTION_MED_TYPE,
  PATCHES_MED_TYPE,
  PILL_MED_TYPE,
  SYRUP_MED_TYPE,
} from '../constants/MedicationCategory/medTypes';
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
    icon: DROPS_ICON,
  },
  {
    name: SYRUP_MED_TYPE,
    unit: VOLUME_UNIT,
    color: SYRUP_COLOR,
    icon: SYRUP_ICON,
  },
  {
    name: INJECTION_MED_TYPE,
    unit: VOLUME_UNIT,
    color: INJECTION_COLOR,
    icon: INJECTION_ICON,
  },
  {
    name: INHALER_MED_TYPE,
    unit: VOLUME_UNIT,
    color: INHALER_COLOR,
    icon: INJECTION_ICON,
  },
  {
    name: PILL_MED_TYPE,
    unit: QUANTITY_UNIT,
    color: PILLS_COLOR,
    icon: PILLS_ICON,
  },
  {
    name: PATCHES_MED_TYPE,
    unit: QUANTITY_UNIT,
    color: PATCHES_COLOR,
    icon: PATCHES_ICON,
  },
];
