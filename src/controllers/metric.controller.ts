// Libraries
import to from 'await-to-js';
import { RequestHandler } from 'express';
import { QueryTypes } from 'sequelize';

// Utils
import { isValidId, isValidState } from '../utils/commonFuncitons';
import {
  DEF_METRIC_COVERAGE,
  DEF_REPOSITORY_DATE,
  DEF_REPOSITORY_STATE,
  ERR_DATA_FOR_GET_METRICS_BY_TRIBE,
  ERR_GETTING_METRICS_DATA,
  ERR_WRONG_REPO_STATE,
  ERR_WRONG_TYPE_ID,
  INFO_FIND_0_METRICS,
  INFO_FIND_METRICS,
} from '../utils/constants';
import Singleton from '../utils/singleton';

/**
 * Function for get the metrics of repositories from a tribe ID
 * @param req The reuqest object from express
 * @param res The response object from express
 */
export const getMetrics: RequestHandler = async (req, res) => {
  console.log('24 SI LLEGO ACA >>>>>>>>> ');
  const tribeId = req.params.id;
  console.log('28 typeof(DEF_REPOSITORY_DATE) >>> ', typeof(DEF_REPOSITORY_DATE));
  const date = req.query.date ? req.query.date : DEF_REPOSITORY_DATE;
  const state = req.query.state ? String(req.query.state).toUpperCase() : DEF_REPOSITORY_STATE;
  const coverage = req.query.coverage ? req.query.coverage : DEF_METRIC_COVERAGE;
  console.log('32 typeof(date) >>> ', typeof(date));

  if (!tribeId || tribeId.length <= 0) {
    return res.status(400).json({
      message: ERR_DATA_FOR_GET_METRICS_BY_TRIBE,
      success: false,
    });
  }

  const validDBId = await isValidId(tribeId);

  if (!validDBId) {
    return res.status(400).json({
      message: ERR_WRONG_TYPE_ID,
      success: false,
    });
  }

  const validState = await isValidState(state);

  if (!validState) {
    return res.status(400).json({
      message: ERR_WRONG_REPO_STATE,
      success: false,
    });
  }

  const dbManager = Singleton.getInstance().dbManager;

  // We build the query in this way to make the query to the DB more optimal
  const query = `SELECT repository.id_repository, repository.name, tribe.name, `
                + `organization.name, metric.coverage, metric.code_smells, metric.bugs, `
                + `metric.vulnerabilities, metric.hotspot, repository.state FROM tribe `
                + `INNER JOIN repository ON repository.id_tribe = tribe.id_tribe `
                + `LEFT JOIN organization ON tribe.id_organization = organization.id_organization `
                + `LEFT JOIN metric ON metric.id_repository = repository.id_repository `
                + `WHERE tribe.id_tribe = ${tribeId} `
                + `AND repository.create_time >= '${date}' `
                + `AND repository.state = '${state}' `
                + `AND metric.coverage >= ${coverage}`;

  console.log('51 query >>> ', query);

  const [error, result] = await to<IOrganization[]>(dbManager.sequelize.query(query, { type: QueryTypes.SELECT }));

  // const [error, result] = await to<IOrganization>(dbManager.organization.findOne(whereFindOne));

  if (error) {
    res.status(500).json({
      message: `${ERR_GETTING_METRICS_DATA}` + error,
      success: false,
    });
    // throw new Error(JSON.stringify(`${ERR_GETTING_METRICS_DATA}` + error));
  }

  if (!result || result.length <= 0) {
    return res.json({
      message: `${INFO_FIND_0_METRICS}`,
      success: false,
    });
  }

  return res.json({
    message: INFO_FIND_METRICS,
    result,
    success: true,
  });
};
