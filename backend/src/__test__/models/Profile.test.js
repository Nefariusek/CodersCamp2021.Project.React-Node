import Profile from '../../models/Profile';

describe('Profile model test', () => {
  const date = new Date().getDay();

  it('new profile has default last online value', () => {
    const profile = new Profile();
    const addDate = profile.onlineDate.getDay();
    expect(addDate).toBe(date);
  });
});
