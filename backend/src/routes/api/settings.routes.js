import { settingsValidator } from '../../models/Settings.js';
import { getSettings, patchSettings } from '../../middlewares/settingsMiddlewares.js';

const settingsRoutes = (router) => {
  router.get('/settings/:id', getSettings);

  router.patch('/settings/:id', settingsValidator, patchSettings);
};

export default settingsRoutes;
