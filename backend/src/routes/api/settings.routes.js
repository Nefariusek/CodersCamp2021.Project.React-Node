import { StatusCodes } from 'http-status-codes';
import Profile from '../../models/Profile.js';
import Settings from '../../models/Settings.js';
import { settingsValidator } from '../../models/Settings.js';

const settingsRoutes = (router) => {
  router.get('/settings/:id', async (req, res) => {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(StatusCodes.NOT_FOUND).send();
    }
    const settings = await Settings.findById(profile.settings);
    res.status(StatusCodes.OK).send(settings);
  });

  router.patch('/settings/:id', settingsValidator, async (req, res) => {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(StatusCodes.NOT_FOUND).send();
    }
    const settings = await Settings.findByIdAndUpdate(profile.settings, req.body, { new: true });
    res.status(StatusCodes.OK).send(settings);
  });
};

export default settingsRoutes;
