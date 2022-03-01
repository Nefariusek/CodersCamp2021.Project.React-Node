import { StatusCodes } from 'http-status-codes';
import Profile from '../../models/Profile.js';

const userProfileEndpoint = async (router) => {
  router.get('/users/:id', (req, res) => {
    let id = req.params.id;
    Profile.findById(id, function (err, profile) {
      if (err) {
        console.log(err);
        res.status(StatusCodes.BAD_REQUEST).send('Something went wrong.');
      } else {
        if (profile === null) {
          res.status(StatusCodes.NOT_FOUND).send('User not found.');
        } else {
          res.status(StatusCodes.OK).send(profile);
        }
      }
    });
  });
};

export default userProfileEndpoint;
