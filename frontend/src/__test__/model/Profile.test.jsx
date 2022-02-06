import drugs from '../../mock/drugs';
import Profile from '../../model/Profile';

const userClass = { email: 'testEmail@gmail.com', username: 'testUsername', logged: 'true' };
const name = 'testName';
const age = 1234;
const medications = drugs;

test('Profile has every attribute', () => {
  const testProfileClass = new Profile(userClass, name, age, medications);

  const expectedEmail = userClass.email;
  const expectedUsername = userClass.username;

  expect(testProfileClass.userClass.email).toBe(expectedEmail);
  expect(testProfileClass.userClass.username).toBe(expectedUsername);
  expect(testProfileClass.userClass.logged).toBeTruthy();
  expect(testProfileClass.userName).toBe(name);
  expect(testProfileClass.userAge).toBe(age);
  expect(testProfileClass.userMedications).toBe(medications);
});
