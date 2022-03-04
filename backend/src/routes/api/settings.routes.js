import { StatusCodes } from 'http-status-codes';
import Profile from '../../models/Profile.js';
import Settings from '../../models/Settings.js';

const settingsEndpoint = (router) => {
  router.get('/settings/:id', async (req, res) => {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(StatusCodes.NOT_FOUND).send();
    }
    const settings = await Settings.findById(profile.settings);
    res.status(StatusCodes.OK).json(settings);
  });
};

export default settingsEndpoint;
