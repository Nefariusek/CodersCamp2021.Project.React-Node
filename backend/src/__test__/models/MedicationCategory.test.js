import MedicationCategory, { medicationCategoryValidator } from '../../models/MedicationCategory';
import { PILLS_COLOR, SYRUP_COLOR } from '../../constants/MedicationCategory/pillColors';
import { QUANTITY_UNIT, VOLUME_UNIT } from '../../constants/MedicationCategory/medsUnits';
import { PILLS_ICON, SYRUP_ICON } from '../../constants/MedicationCategory/medsIcons';

let testMedicationCategory;
let testRequestBody;
let res;
let err;

describe('MedicationCategory model', () => {
  beforeEach(() => {
    testMedicationCategory = new MedicationCategory();
  });

  it('new medication category has default values', () => {
    expect(testMedicationCategory.unit).toBe(QUANTITY_UNIT);
    expect(testMedicationCategory.color).toBe(PILLS_COLOR);
    expect(testMedicationCategory.icon).toBe(PILLS_ICON);
  });

  it('settings model accepts allowed values', () => {
    testMedicationCategory.name = 'syrup';
    testMedicationCategory.unit = VOLUME_UNIT;
    testMedicationCategory.color = SYRUP_COLOR;
    testMedicationCategory.icon = SYRUP_ICON;

    expect(testMedicationCategory.name).toBe('syrup');
    expect(testMedicationCategory.unit).toBe(VOLUME_UNIT);
    expect(testMedicationCategory.color).toBe(SYRUP_COLOR);
    expect(testMedicationCategory.icon).toBe(SYRUP_ICON);
  });
});

describe('Joi validator for medication category model', () => {
  beforeEach(() => {
    err = undefined;
    testRequestBody = {
      body: {
        name: undefined,
        unit: undefined,
        color: undefined,
        icon: undefined,
      },
    };
  });

  it('Joi validator accepts allowed data', () => {
    testRequestBody.body.name = 'Xanax';
    testRequestBody.body.unit = VOLUME_UNIT;
    testRequestBody.body.color = SYRUP_COLOR;
    testRequestBody.body.icon = SYRUP_ICON;

    medicationCategoryValidator(testRequestBody, res, (e) => {
      err = e;
    });
    expect(err).toBeUndefined();
  });

  it('Joi validator rejects wrong values', () => {
    let res;
    testRequestBody.body.name = 'Xa';
    testRequestBody.body.unit = 'cm3';
    testRequestBody.body.color = 'salmon';
    testRequestBody.body.icon = 'not a valid icon';

    medicationCategoryValidator(testRequestBody, res, (e) => {
      err = e;
    });
    expect(err).not.toBeUndefined();
  });
});
