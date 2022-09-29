// Libraries
import { Express } from 'express';

// Utils
import { ENDPOINT_GET_METRICS } from '../utils/constants';

// Controllers
import { getMetrics } from '../controllers/metric.controller';

// Metric route
export default (app: Express) => {
  app.get(ENDPOINT_GET_METRICS, getMetrics);
};
