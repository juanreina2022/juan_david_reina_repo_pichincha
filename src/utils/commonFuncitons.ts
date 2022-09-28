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
  return /^\d{6}-?\d{4}$/.test(id);
};
