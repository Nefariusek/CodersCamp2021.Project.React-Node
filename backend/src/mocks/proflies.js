import Profile from '../models/Profile.js';
import Settings from '../models/Settings.js';

const mockSettings = new Settings();
mockSettings.save();

const MOCK_PROFILES = [
  new Profile({ registerDate: new Date(), lastName: 'last', firstName: 'first', settings: mockSettings }),
];

MOCK_PROFILES.forEach((profile) => {
  profile.save();
});

export default MOCK_PROFILES;
