// Libraries
import { Express } from 'express';

// Controllers
import { deleteOrganization, getOrganization, getOrganizations, postOrganization, putOrganization } from '../controllers/organization.controller';

// Utils
import {
  ENDPOINT_DELETE_ORGANIZATION,
  ENDPOINT_GET_ONE_ORGANIZATION,
  ENDPOINT_GET_ORGANIZATIONS,
  ENDPOINT_POST_ORGANIZATION,
  ENDPOINT_PUT_ORGANIZATION,
} from '../utils/constants';

// Organization routes
export default (app: Express) => {
  app.get(ENDPOINT_GET_ORGANIZATIONS, getOrganizations);
  app.get(ENDPOINT_GET_ONE_ORGANIZATION, getOrganization);
  app.post(ENDPOINT_POST_ORGANIZATION, postOrganization);
  app.put(ENDPOINT_PUT_ORGANIZATION, putOrganization);
  app.delete(ENDPOINT_DELETE_ORGANIZATION, deleteOrganization);
};
