// Libraries
import { Express } from 'express';

// Controllers
import { deleteTribe, getTribe, getTribes, postTribe, putTribe } from '../controllers/tribe.controller';

// Utils
import {
  ENDPOINT_DELETE_TRIBE,
  ENDPOINT_GET_TRIBE,
  ENDPOINT_GET_TRIBES,
  ENDPOINT_POST_TRIBE,
  ENDPOINT_PUT_TRIBE,
} from '../utils/constants';

// Tribe routes
export default (app: Express) => {
  app.get(ENDPOINT_GET_TRIBE, getTribe);
  app.get(ENDPOINT_GET_TRIBES, getTribes);
  app.post(ENDPOINT_POST_TRIBE, postTribe);
  app.put(ENDPOINT_PUT_TRIBE, putTribe);
  app.delete(ENDPOINT_DELETE_TRIBE, deleteTribe);
};
