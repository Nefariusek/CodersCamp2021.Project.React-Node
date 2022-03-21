import { StatusCodes } from 'http-status-codes';
import Profile from '../models/Profile.js';
import Settings from '../models/Settings.js';

export async function getSettings(req, res) {
  let profile;
  let settings;
  try {
    profile = await Profile.findById(req.params.id);
  } catch (err) {
    return next(err);
  }
  try {
    settings = await Settings.findById(profile.settings);
  } catch (err) {
    return next(err);
  }
  res.status(StatusCodes.OK).send(settings);
}

export async function patchSettings(req, res) {
  let profile;
  let settings;
  try {
    profile = await Profile.findById(req.params.id);
  } catch (err) {
    return next(err);
  }
  try {
    settings = await Settings.findByIdAndUpdate(profile.settings, req.body, { new: true });
  } catch (err) {
    return next(err);
  }
  res.status(StatusCodes.OK).send(settings);
}
