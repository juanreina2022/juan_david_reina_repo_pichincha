// Libraries
import to from 'await-to-js';
import { RequestHandler } from 'express';
import { QueryTypes } from 'sequelize';

// Utils
import { isValidId, isValidState, transformStatusAndState } from '../utils/commonFuncitons';
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
  const tribeId = req.params.id;

  // Get the optional params
  const date = req.query.date ? req.query.date : DEF_REPOSITORY_DATE;
  const state = req.query.state ? String(req.query.state).toUpperCase() : DEF_REPOSITORY_STATE;
  const coverage = req.query.coverage ? req.query.coverage : null;

  // Validate if arrive the tribe ID
  if (!tribeId || tribeId.length <= 0) {
    return res.status(400).json({
      message: ERR_DATA_FOR_GET_METRICS_BY_TRIBE,
      success: false,
    });
  }

  // ID format validation
  const validDBId = await isValidId(tribeId);

  if (!validDBId) {
    return res.status(400).json({
      message: ERR_WRONG_TYPE_ID,
      success: false,
    });
  }

  // Repository state validation
  const validState = await isValidState(state);

  if (!validState) {
    return res.status(400).json({
      message: ERR_WRONG_REPO_STATE,
      success: false,
    });
  }

  let where = `WHERE tribe.id_tribe = ${tribeId} `;

  if (coverage) {
    where += `AND metric.coverage = ${coverage}`;
  } else {
    where += `AND metric.coverage >= ${DEF_METRIC_COVERAGE}`;
  }

  // We build the query in this way to make the query to the DB more optimal
  const query = `SELECT repository.id_repository as id, repository.name as name, tribe.name as tribe, `
    + `organization.name as organization, metric.coverage as coverage, metric.code_smells as codeSmells, metric.bugs as bugs, `
    + `metric.vulnerabilities as vulnerabilities, metric.hotspot as hotspot, repository.state as state FROM tribe `
    + `INNER JOIN repository ON repository.id_tribe = tribe.id_tribe `
    + `LEFT JOIN organization ON tribe.id_organization = organization.id_organization `
    + `LEFT JOIN metric ON metric.id_repository = repository.id_repository `
    + `${where} `
    + `AND repository.create_time >= '${date}' `
    + `AND repository.state = '${state}' `;

  const dbManager = Singleton.getInstance().dbManager;

  const [error, result] = await to<IMetricResult[]>(dbManager.sequelize.query(query, { type: QueryTypes.SELECT }));

  if (error) {
    res.status(500).json({
      message: `${ERR_GETTING_METRICS_DATA}` + error,
      success: false,
    });
  }

  if (!result || result.length <= 0) {
    return res.json({
      message: `${INFO_FIND_0_METRICS}`,
      success: false,
    });
  }

  // Transforming the coverage to percentage
  for (const repository of result) {
    repository.coverage = `${(parseFloat(repository.coverage) * 100)}%`;
  }

  // Getting the state verification and transform it and the status
  const transformedData = await transformStatusAndState(result);

  return res.json({
    message: INFO_FIND_METRICS,
    transformedData,
    // tslint:disable-next-line: object-literal-sort-keys
    success: true,
  });
};
