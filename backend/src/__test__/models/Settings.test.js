import Settings from '../../models/Settings';
import { LIGHT_THEME, DARK_THEME } from '../../constants/themes';

let testSettings;
let testRequestBody;

describe('Settings model', () => {
  beforeEach(() => {
    testSettings = new Settings();
  });

  it('new settings has default values', () => {
    expect(testSettings.appTheme).toBe(LIGHT_THEME);
    expect(testSettings.soonExpiringFilterLength).toBe(3);
    expect(testSettings.validateSync()).toBeUndefined();
  });

  it('settings model doesnt allow wrong values', () => {
    testSettings.appTheme = 'wrongAppTheme';
    testSettings.soonExpiringFilterLength = 11;

    expect(testSettings.validateSync).toThrow();
  });

  it('settings model accepts allowed values', () => {
    testSettings.appTheme = DARK_THEME;
    testSettings.soonExpiringFilterLength = 5;

    expect(testSettings.appTheme).toBe(DARK_THEME);
    expect(testSettings.soonExpiringFilterLength).toBe(5);
    expect(testSettings.validateSync()).toBeUndefined();
  });
});

describe('Joi validator for settings model', () => {
  beforeEach(() => {
    testSettings = new Settings();
    testRequestBody = {
      appTheme: undefined,
      soonExpiringFilterLength: undefined,
    };
  });
  it('Joi validator accepts allowed data', () => {
    testRequestBody.appTheme = DARK_THEME;
    testRequestBody.soonExpiringFilterLength = 7;
    const { value, error } = testSettings.joiValidate(testRequestBody);
    expect(value).toStrictEqual(testRequestBody);
    expect(error).toBeUndefined();
  });
  it('Joi validator doenst allow wrong values', () => {
    testRequestBody.appTheme = 'wrongAppTheme';
    testRequestBody.soonExpiringFilterLength = 4;
    const { value, error } = testSettings.joiValidate(testRequestBody);
    expect(error).not.toBeUndefined();
  });
});
