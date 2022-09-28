// Libraries
import to from 'await-to-js';
import { RequestHandler } from 'express';

// Utils
import {
  ERR_DATA_FOR_GET_TRIBE,
  ERR_DATA_FOR_STORE_TRIBE,
  ERR_DATA_FOR_UPDATE_TRIBE,
  ERR_DELETING_ONE_TRIBE,
  ERR_GETTING_ALL_TRIBES,
  ERR_GETTING_ONE_TRIBE,
  ERR_STORE_TRIBES,
  ERR_STORE_TRIBES_DUPLICATE,
  INFO_DELETE_TRIBE,
  INFO_FIND_0_TRIBE,
  INFO_FIND_0_TRIBES,
  INFO_FIND_ALL_TRIBES,
  INFO_FIND_ONE_TRIBE,
  INFO_STORE_TRIBE,
  INFO_UPDATE_TRIBE,
} from '../utils/constants';
import Singleton from '../utils/singleton';

/**
 * Function for get all the tribes
 * @param req The request object from the route
 * @param res The response for the route
 */
export const getTribes: RequestHandler = async (req, res) => {
  const dbManager = Singleton.getInstance().dbManager;

  const [error, result] = await to<{ rows: ITribe[], count: number }>(dbManager.tribe.findAndCountAll());

  if (error) {
    throw new Error(JSON.stringify(`${ERR_GETTING_ALL_TRIBES}` + error));
  }

  if (!result || result.rows.length <= 0) {
    return res.json({
      message: INFO_FIND_0_TRIBES,
      result,
      success: false,
      totalRecords: result.count,
    });
  }

  return res.json({
    message: INFO_FIND_ALL_TRIBES,
    result: result.rows,
    success: true,
    totalRecords: result.count,
  });
};

/**
 * Function for get one tribe from DB
 * @param req The request object from the route
 * @param res The response for the route
 */
export const getTribe: RequestHandler = async (req, res) => {
  const tribeId = req.params.id;

  // tslint:disable-next-line: use-isnan
  if (!tribeId || tribeId.length <= 0) {
    return res.status(400).json({
      message: ERR_DATA_FOR_GET_TRIBE,
      success: false,
    });
  }

  const dbManager = Singleton.getInstance().dbManager;

  const whereFindOne = {
    where: { id_tribe: tribeId },
  };

  const [error, result] = await to<ITribe>(dbManager.tribe.findOne(whereFindOne));

  if (error) {
    throw new Error(JSON.stringify(`${ERR_GETTING_ONE_TRIBE}` + error));
  }

  if (!result) {
    return res.json({
      message: `${INFO_FIND_0_TRIBE} ${tribeId}`,
      success: false,
    });
  }

  return res.json({
    message: INFO_FIND_ONE_TRIBE,
    result,
    success: true,
  });
};

/**
 * Function for store the tribe information into the DB
 * @param req The request object from the route
 * @param res The response for the route
 */
export const postTribe: RequestHandler = async (req, res) => {
  if (!req || !req.body || !req.body.name || !req.body.status || req.body.name.length <= 0 || req.body.status < 0) {
    return res.status(400).json({
      message: ERR_DATA_FOR_STORE_TRIBE,
      success: false,
    });
  }

  const dbManager = Singleton.getInstance().dbManager;
  const name = req.body.name;
  const status = parseInt(req.body.status, 10);
  const id_organization = parseInt(req.body.id_organization, 10);

  const dataViewStore: ITribe = {
    id_organization,
    name,
    status,
  };

  const [error, result] = await to<ITribe>(dbManager.tribe.create(dataViewStore));

  if (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(403).send({
        message: ERR_STORE_TRIBES_DUPLICATE,
        status: 'error',
        success: false,
      });
    } else {
      return res.status(500).send({
        message: `${ERR_STORE_TRIBES}: ${error}`,
        status: 'error',
        success: false,
      });
    }
  }

  return res.json({
    message: INFO_STORE_TRIBE,
    result,
    success: true,
  });
};

/**
 * Function for update an tribe by id
 * @param req The request object form client side
 * @param res The response object to return to the client
 * @returns A message with the data updated
 */
export const putTribe: RequestHandler = async (req, res) => {
  if (!req || !req.params.id || !req.body || !req.body.name || !req.body.status || req.body.name.length <= 0 || req.body.status < 0) {
    return res.status(400).json({
      message: ERR_DATA_FOR_UPDATE_TRIBE,
      success: false,
    });
  }

  const tribeId = req.params.id;

  const whereFindOne = {
    where: { id_tribe: tribeId },
  };

  const dbManager = Singleton.getInstance().dbManager;
  const name = req.body.name;
  const status = parseInt(req.body.status, 10);
  const id_organization = parseInt(req.body.id_organization, 10);

  const dataToUpdate: ITribe = {
    id_organization,
    name,
    status,
  };

  const [error, result] = await to<ITribe>(dbManager.tribe.update(dataToUpdate, whereFindOne));

  if (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(403).send({
        message: ERR_STORE_TRIBES_DUPLICATE,
        status: 'error',
        success: false,
      });
    } else {
      return res.status(500).send({
        message: `${ERR_STORE_TRIBES}: ${error}`,
        status: 'error',
        success: false,
      });
    }
  }

  // Search the updated record after the update
  const [err, resultQ] = await to<ITribe>(dbManager.tribe.findOne(whereFindOne));

  if (err) {
    throw new Error(JSON.stringify(`${ERR_GETTING_ALL_TRIBES}` + error));
  }

  return res.json({
    message: INFO_UPDATE_TRIBE,
    result: resultQ,
    success: true,
  });
};

/**
 * Function for delete an Tribe
 * @param req The request object from the client side
 * @param res The response object for response the request
 * @returns Return an deleted object
 */
export const deleteTribe: RequestHandler = async (req, res) => {
  const tribeId = req.params.id;

  // tslint:disable-next-line: use-isnan
  if (!tribeId || tribeId.length <= 0) {
    return res.status(400).json({
      message: ERR_DATA_FOR_GET_TRIBE,
      success: false,
    });
  }

  const dbManager = Singleton.getInstance().dbManager;

  const whereFindOne = {
    where: { id_tribe: tribeId },
  };

  const [error, result] = await to<ITribe>(dbManager.tribe.destroy(whereFindOne));

  if (error) {
    throw new Error(JSON.stringify(`${ERR_DELETING_ONE_TRIBE}` + error));
  }

  if (!result) {
    return res.json({
      message: `${INFO_FIND_0_TRIBE} ${tribeId}`,
      success: false,
    });
  }

  return res.json({
    message: INFO_DELETE_TRIBE,
    result,
    success: true,
  });
};
