import models from '../../constants/models';

export function modelLoader() {
  models.forEach((model) => {
    model.createCollection();
  });
}
