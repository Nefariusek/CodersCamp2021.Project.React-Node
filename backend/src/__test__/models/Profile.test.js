import Profile, { profileValidator } from '../../models/Profile';

let testRequestBody;
let res;
let err;
const date = new Date().getDay();
const testString = 'abc'.repeat(61);
const testDate = new Date().getDay() + 1;

describe('Profile model test', () => {
  it('new profile has default last online value', () => {
    const profile = new Profile();
    const addDate = profile.onlineDate.getDay();
    expect(addDate).toBe(date);
  });
});

describe('Joi validator for profile model', () => {
  beforeEach(() => {
    err = undefined;
    testRequestBody = {
      body: {
        age: undefined,
        firstName: undefined,
        lastName: undefined,
        userBio: undefined,
        registerDate: undefined,
        onlineDate: undefined,
      },
    };
  });

  it('Joi validator accepts allowed data', () => {
    testRequestBody.body.age = 5;
    testRequestBody.body.firstName = 'abcd';
    testRequestBody.body.lastName = 'abcd';
    testRequestBody.body.userBio = 'abcd';
    testRequestBody.body.registerDate = date;
    testRequestBody.body.onlineDate = date;

    profileValidator(testRequestBody, res, (e) => {
      err = e;
    });
    expect(err).toBeUndefined();
  });

  it('Joi validator rejects wrong values', () => {
    testRequestBody.body.age = 5.5;
    testRequestBody.body.firstName = 'ABCD';
    testRequestBody.body.lastName = 'ABCD';
    testRequestBody.body.userBio = testString;
    testRequestBody.body.registerDate = testDate;
    testRequestBody.body.onlineDate = testDate;

    profileValidator(testRequestBody, res, (e) => {
      err = e;
    });
    expect(err).not.toBeUndefined();
  });
});
