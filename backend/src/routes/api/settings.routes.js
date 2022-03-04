import { StatusCodes } from 'http-status-codes';
import Profile from '../../models/Profile';

const settingsEndpoint = (router) => {
  router.get('/settings/:id', getProfile, (_req, res) => {
    res.status(StatusCodes.OK).send(res.settings);
  });
};

async function getProfile(req, res, next) {
  const profile = await Profile.findById(req.params.id);
  if (!profile) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  res.settings = profile.settings;
  next();
}

export default settingsEndpoint;
