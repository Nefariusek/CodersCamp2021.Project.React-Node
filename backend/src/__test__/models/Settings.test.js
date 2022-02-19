import Settings from '../../models/Settings';

describe('Settings model', () => {
  it('new settings has default values', () => {
    const testSettings = new Settings();
    expect(testSettings.appTheme).toBe('light');
    expect(testSettings.soonExpLenght).toBe(3);
  });
});
