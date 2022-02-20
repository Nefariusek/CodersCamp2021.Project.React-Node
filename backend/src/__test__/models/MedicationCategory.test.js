import MedicationCategory from '../../models/MedicationCategory';
import { PILLS_COLOR, SYRUP_COLOR } from '../../constants/pillColors';

import { PILLS_ICON, SYRUP_ICON } from '../../constants/medsIcons';

let testMedicationCategory;

describe('MedicationCategory model', () => {
  beforeEach(() => {
    testMedicationCategory = new MedicationCategory();
  });

  it('new medication category has default values', () => {
    expect(testMedicationCategory.unit).toBe('pcs');
    expect(testMedicationCategory.color).toBe(PILLS_COLOR);
    expect(testMedicationCategory.icon).toBe(PILLS_ICON);
  });

  it('settings model accepts allowed values', () => {
    testMedicationCategory.name = 'syrup';
    testMedicationCategory.unit = 'ml';
    testMedicationCategory.color = SYRUP_COLOR;
    testMedicationCategory.icon = SYRUP_ICON;

    expect(testMedicationCategory.name).toBe('syrup');
    expect(testMedicationCategory.unit).toBe('ml');
    expect(testMedicationCategory.color).toBe(SYRUP_COLOR);
    expect(testMedicationCategory.icon).toBe(SYRUP_ICON);
  });
});
