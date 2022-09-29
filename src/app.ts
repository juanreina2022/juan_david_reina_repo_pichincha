// Libraries
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';

// Routes
import metricsRoutes from '../src/routes/metric.routes';
import mockRoutes from '../src/routes/mock.routes';
import organizationRoutes from '../src/routes/organization.routes';
import tribesRoutes from '../src/routes/tribe.routes';

// DB
import initdb from './initdb';
import { WAR_REQUEST_RECEIVED_PAGE_404 } from './utils/constants';

const dbManager = initdb();

const app = express();
// Parsing body to json
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

// tslint:disable-next-line: no-unused-expression
dbManager;

// Routes
mockRoutes(app);
organizationRoutes(app);
metricsRoutes(app);
tribesRoutes(app);

/**
   * Listening all uncontrolled endpoints
   */
 app.use('*', async (req, res) => {
  return res.status(404).send({
    error_message: WAR_REQUEST_RECEIVED_PAGE_404,
    success: false,
  });
});

export default app;
