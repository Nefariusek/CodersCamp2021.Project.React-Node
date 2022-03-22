import { StatusCodes } from 'http-status-codes';
import Profile from '../models/Profile.js';
import Settings from '../models/Settings.js';
import ExpressError from './ExpressError.js';

export async function getSettings(req, res, next) {
  const profile = getProfileById(req.params.id, next);
  try {
    const settings = await Settings.findById(profile.settings);
    if (!profile) {
      throw new ExpressError("Can't find profile", StatusCodes.NOT_FOUND);
    }
    res.status(StatusCodes.OK).send(settings);
  } catch (err) {
    return next(err);
  }
}

export async function patchSettings(req, res, next) {
  const profile = getProfileById(req.params.id, next);
  try {
    const settings = await Settings.findByIdAndUpdate(profile.settings, req.body, { new: true });
    if (!settings) {
      throw new ExpressError("Can't update settings", StatusCodes.NOT_MODIFIED);
    }
    res.status(StatusCodes.OK).send(settings);
  } catch (err) {
    return next(err);
  }
}

const getProfileById = async (id, next) => {
  try {
    const profile = await Profile.findById(id);
    if (!profile) {
      throw new ExpressError("Can't find profile", StatusCodes.NOT_FOUND);
    }
  } catch (err) {
    return next(err);
  }
};
