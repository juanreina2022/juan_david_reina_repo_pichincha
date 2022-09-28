// Libraries
import to from 'await-to-js';
import { RequestHandler } from 'express';

// Utils
import {
  ERR_DATA_FOR_GET_ORGANIZATION,
  ERR_DATA_FOR_STORE_ORGANIZATION,
  ERR_DATA_FOR_UPDATE_ORGANIZATION,
  ERR_DELETING_ONE_ORGANIZATION,
  ERR_GETTING_ALL_ORGANIZATIONS,
  ERR_GETTING_ONE_ORGANIZATION,
  ERR_STORE_ORGANIZATIONS,
  ERR_STORE_ORGANIZATIONS_DUPLICATE,
  INFO_DELETE_ORGANIZATION,
  INFO_FIND_0_ORGANIZATION,
  INFO_FIND_0_ORGANIZATIONS,
  INFO_FIND_ALL_ORGANIZATIONS,
  INFO_FIND_ONE_ORGANIZATION,
  INFO_STORE_ORGANIZATION,
  INFO_UPDATE_ORGANIZATION,
} from '../utils/constants';
import Singleton from '../utils/singleton';

/**
 * Function for get all the organizations
 * @param req The request object from the route
 * @param res The response for the route
 */
export const getOrganizations: RequestHandler = async (req, res) => {
  const dbManager = Singleton.getInstance().dbManager;

  const [error, result] = await to<{ rows: IOrganization[], count: number }>(dbManager.organization.findAndCountAll());

  if (error) {
    throw new Error(JSON.stringify(`${ERR_GETTING_ALL_ORGANIZATIONS}` + error));
  }

  if (!result || result.rows.length <= 0) {
    return res.json({
      message: INFO_FIND_0_ORGANIZATIONS,
      result,
      success: false,
      totalRecords: result.count,
    });
  }

  return res.json({
    message: INFO_FIND_ALL_ORGANIZATIONS,
    result: result.rows,
    success: true,
    totalRecords: result.count,
  });
};

/**
 * Function for get one organization from DB
 * @param req The request object from the route
 * @param res The response for the route
 */
export const getOrganization: RequestHandler = async (req, res) => {
  const organizationId = req.params.id;

  // tslint:disable-next-line: use-isnan
  if (!organizationId || organizationId.length <= 0) {
    return res.status(400).json({
      message: ERR_DATA_FOR_GET_ORGANIZATION,
      success: false,
    });
  }

  const dbManager = Singleton.getInstance().dbManager;

  const whereFindOne = {
    where: { id_organization: organizationId },
  };

  const [error, result] = await to<IOrganization>(dbManager.organization.findOne(whereFindOne));

  if (error) {
    throw new Error(JSON.stringify(`${ERR_GETTING_ONE_ORGANIZATION}` + error));
  }

  if (!result) {
    return res.json({
      message: `${INFO_FIND_0_ORGANIZATION} ${organizationId}`,
      success: false,
    });
  }

  return res.json({
    message: INFO_FIND_ONE_ORGANIZATION,
    result,
    success: true,
  });
};

/**
 * Function for store the organization information into the DB
 * @param req The request object from the route
 * @param res The response for the route
 */
export const postOrganization: RequestHandler = async (req, res) => {
  if (!req || !req.body || !req.body.name || !req.body.status || req.body.name.length <= 0 || req.body.status < 0) {
    return res.status(400).json({
      message: ERR_DATA_FOR_STORE_ORGANIZATION,
      success: false,
    });
  }

  const dbManager = Singleton.getInstance().dbManager;
  const name = req.body.name;
  const status = parseInt(req.body.status, 10);

  const dataViewStore: IOrganization = {
    name,
    status,
  };

  const [error, result] = await to<IOrganization>(dbManager.organization.create(dataViewStore));

  if (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(403).send({
        message: ERR_STORE_ORGANIZATIONS_DUPLICATE,
        status: 'error',
        success: false,
      });
    } else {
      return res.status(500).send({
        message: `${ERR_STORE_ORGANIZATIONS}: ${error}`,
        status: 'error',
        success: false,
      });
    }
  }

  return res.json({
    message: INFO_STORE_ORGANIZATION,
    result,
    success: true,
  });
};

/**
 * Function for update an organization by id
 * @param req The request object form client side
 * @param res The response object to return to the client
 * @returns A message with the data updated
 */
export const putOrganization: RequestHandler = async (req, res) => {
  if (!req || !req.params.id || !req.body || !req.body.name || !req.body.status || req.body.name.length <= 0 || req.body.status < 0) {
    return res.status(400).json({
      message: ERR_DATA_FOR_UPDATE_ORGANIZATION,
      success: false,
    });
  }

  const organizationId = req.params.id;

  const whereFindOne = {
    where: { id_organization: organizationId },
  };

  const dbManager = Singleton.getInstance().dbManager;
  const name = req.body.name;
  const status = parseInt(req.body.status, 10);

  const dataToUpdate: IOrganization = {
    name,
    status,
  };

  const [error, result] = await to<IOrganization>(dbManager.organization.update(dataToUpdate, whereFindOne));

  if (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(403).send({
        message: ERR_STORE_ORGANIZATIONS_DUPLICATE,
        status: 'error',
        success: false,
      });
    } else {
      return res.status(500).send({
        message: `${ERR_STORE_ORGANIZATIONS}: ${error}`,
        status: 'error',
        success: false,
      });
    }
  }

  // Search the updated record after the update
  const [err, resultQ] = await to<IOrganization>(dbManager.organization.findOne(whereFindOne));

  if (err) {
    throw new Error(JSON.stringify(`${ERR_GETTING_ALL_ORGANIZATIONS}` + error));
  }

  return res.json({
    message: INFO_UPDATE_ORGANIZATION,
    result: resultQ,
    success: true,
  });
};

/**
 * Function for delete an Organization
 * @param req The request object from the client side
 * @param res The response object for response the request
 * @returns Return an deleted object
 */
export const deleteOrganization: RequestHandler = async (req, res) => {
  const organizationId = req.params.id;

  // tslint:disable-next-line: use-isnan
  if (!organizationId || organizationId.length <= 0) {
    return res.status(400).json({
      message: ERR_DATA_FOR_GET_ORGANIZATION,
      success: false,
    });
  }

  const dbManager = Singleton.getInstance().dbManager;

  const whereFindOne = {
    where: { id_organization: organizationId },
  };

  const [error, result] = await to<IOrganization>(dbManager.organization.destroy(whereFindOne));

  if (error) {
    throw new Error(JSON.stringify(`${ERR_DELETING_ONE_ORGANIZATION}` + error));
  }

  if (!result) {
    return res.json({
      message: `${INFO_FIND_0_ORGANIZATION} ${organizationId}`,
      success: false,
    });
  }

  return res.json({
    message: INFO_DELETE_ORGANIZATION,
    result,
    success: true,
  });
};
