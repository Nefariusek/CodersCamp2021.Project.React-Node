import Settings, { settingsValidator } from '../../models/Settings';
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
    testRequestBody = {
      body: {
        appTheme: undefined,
        soonExpiringFilterLength: undefined,
      },
    };
  });

  it('Joi validator accepts allowed data', () => {
    let res;
    testRequestBody.body.appTheme = DARK_THEME;
    testRequestBody.body.soonExpiringFilterLength = 7;
    expect(() => settingsValidator(testRequestBody, res, () => {})).not.toThrow();
  });

  it('Joi validator doesnt allow wrong values', () => {
    let res;
    testRequestBody.body.appTheme = 'wrongAppTheme';
    testRequestBody.body.soonExpiringFilterLength = 4;
    expect(() => settingsValidator(testRequestBody, res, () => {})).toThrow();
  });
});
