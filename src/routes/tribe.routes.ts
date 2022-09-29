// Libraries
import { Express } from 'express';

// Controllers
import { getTribes } from '../controllers/tribe.controller';

// Utils
import {
  ENDPOINT_TRIBES,
} from '../utils/constants';

// Tribe routes
export default (app: Express) => {
  app.get(ENDPOINT_TRIBES, getTribes);
};
