// Utils
import { DEF_CODE_ARCHIVED, DEF_CODE_DISABLE, DEF_CODE_ENABLE } from './constants';

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
