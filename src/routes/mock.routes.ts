// Libraries
import { Express } from 'express';

// Utils
import { ENDPOINT_MOCK } from '../utils/constants';

// Controllers
import { getMockService } from '../controllers/mock.controller';

// Mock route
export default (app: Express) => {
  app.get(ENDPOINT_MOCK, getMockService);
};
