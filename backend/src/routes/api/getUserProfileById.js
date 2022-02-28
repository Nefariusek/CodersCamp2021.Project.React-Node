import { StatusCodes } from 'http-status-codes';
import Profile from '../../models/Profile.js';

const userProfileEndpoint = async (router) => {
  router.get('/users/:id', (req, res) => {
    const profile = Profile.find({ firstName: 'exampleName1' }, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log('Result : ', docs);
      }
    });

    console.log('profile found');
    console.log(profile);
    JSON.stringify(profile);
    // res.status(StatusCodes.OK).send(profile);
  });
};

export default userProfileEndpoint;
