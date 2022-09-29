// Utils
import {
  DEF_APPROVED,
  DEF_AWAIT,
  DEF_CODE_APPROVED,
  DEF_CODE_ARCHIVED,
  DEF_CODE_AWAIT,
  DEF_CODE_DISABLE,
  DEF_CODE_ENABLE,
  DEF_CODE_VERIFIED,
  DEF_STATE_ARCHIVED,
  DEF_STATE_DISABLE,
  DEF_STATE_ENABLE,
  DEF_VERIFIED,
} from './constants';

// Mock data
import { mockData } from '../controllers/mock.controller';

/**
 * Function for validate the status that arrives from the request
 * @param status The status that arrives from the request
 * @returns Return true or false
 */
export const validateOrganizationStatus = async (status: string) => {
  const statusParsed = parseInt(status, 10);

  if (statusParsed === 0 || statusParsed === 1) {
    return true;
  }

  return false;
};

/**
 * Function for validate the id that arrive in the request
 * @param id The ID that arrive in the request
 * @returns Return true or false
 */
export const isValidId = async (id: string) => {
  return /^\d{18}$/.test(id);
};

/**
 * Function for validate the repository state
 * @param state The state that arrives in the request
 * @returns REturn tru or false
 */
export const isValidState = async (state: string) => {
  const validCodes = [DEF_CODE_ENABLE, DEF_CODE_DISABLE, DEF_CODE_ARCHIVED];

  return validCodes.includes(state);
};

/**
 * Function for get the verification state between the mock data and the data from DB
 * @param repositories The repositories data extracted from the DB
 * @returns Return the same data with one value transformed
 */
export const transformStatusAndState = async (repositories: IMetricResult[]) => {
  const newRepoData: IMetricResult[] = [];
  for (const repository of repositories) {
    for (const item of mockData) {
      if (Number(repository.id) === Number(item.id)) {
        repository.verificationState = await transformStateCode(item.state);
      }
    }

    repository.state = await transformStatusCode(repository.state);

    newRepoData.push(repository);
  }

  return newRepoData;
};

/**
 * Function for transform the state code of the repository to an equivalent word
 * @param stateCode The state code of the repository in the mock data
 * @returns An string equivalent to the state code
 */
export const transformStateCode = async (stateCode: number): Promise<string> => {
  let stateTransformed = '';

  switch (stateCode) {
    case DEF_CODE_VERIFIED: return stateTransformed = DEF_VERIFIED; // Verificado

    case DEF_CODE_AWAIT: return stateTransformed = DEF_AWAIT; // En espera

    case DEF_CODE_APPROVED: return stateTransformed = DEF_APPROVED; // Aprobado

    default: return stateTransformed;
  }
};

/**
 * Function for transform the status code of the repository to an equivalent word
 * @param status The status code of the repository in the DB
 * @returns An string equivalent to the status code
 */
export const transformStatusCode = async (status: string): Promise<string>  => {
  let statusTransformed = '';

  switch (status) {
    case DEF_CODE_ENABLE: return statusTransformed = DEF_STATE_ENABLE; // Habilitado

    case DEF_CODE_DISABLE: return statusTransformed = DEF_STATE_DISABLE; // Deshabilitado

    case DEF_CODE_ARCHIVED: return statusTransformed = DEF_STATE_ARCHIVED; // Archivado

    default: return statusTransformed;
  }
};
