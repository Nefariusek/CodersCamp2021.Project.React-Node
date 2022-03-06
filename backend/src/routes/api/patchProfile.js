import Profile from '../../models/Profile.js';
import { profileValidator } from '../../models/Profile.js';

const patchProfileEndpoint = async (router) => {
  router.patch('/profile/:id', profileValidator, (req, res) => {
    console.log(req.body);
    Profile.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((profile) => {
        if (!profile) {
          return res.status(404).send('Profile not found.');
        }
        res.send(profile);
      })
      .catch((error) => {
        res.status(500).send('Something went wrong.');
      });
  });
};

export default patchProfileEndpoint;
