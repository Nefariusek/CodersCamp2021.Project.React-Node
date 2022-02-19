import Settings from '../../models/Settings';

describe('Settings model', () => {
  it('new settings has default values', () => {
    const testSettings = new Settings();

    expect(testSettings.appTheme).toBe('light');
    expect(testSettings.soonExpLenght).toBe(3);
    expect(testSettings.validateSync()).toBeUndefined();
  });

  it('settings model doesnt allow wrong values', () => {
    const settingsWrongTheme = new Settings({ appTheme: 'wrongAppTheme' });
    const settingsWrongSoonExpLen = new Settings({ soonExpLenght: 11 });

    expect(settingsWrongTheme.validateSync).toThrow();
    expect(settingsWrongSoonExpLen.validateSync).toThrow();
  });

  it('settings model accepts allowed values', () => {
    const testSettings = new Settings({ appTheme: 'dark', soonExpLenght: 5 });

    expect(testSettings.appTheme).toBe('dark');
    expect(testSettings.soonExpLenght).toBe(5);
    expect(testSettings.validateSync()).toBeUndefined();
  });
});
