//#region MESSAGES
// DB MESSAGES
export const ERR_DB_CONNECTION = 'Error connecting with MySql database with message: ';

// INFO MESSAGES
export const INFO_FIND_0_ORGANIZATIONS = 'There is not organizations yet into the DB.';
export const INFO_FIND_ALL_ORGANIZATIONS = 'Find organizations succesfully!';
export const INFO_FIND_0_ORGANIZATION = 'The organization that you are looking for does not exist into the DB. Organization ID: ';
export const INFO_FIND_ONE_ORGANIZATION = 'The organization was found succesfully!';
export const INFO_STORE_ORGANIZATION = 'The organization was stored succesfully!';
export const INFO_UPDATE_ORGANIZATION = 'The organization was updated succesfully!';
export const INFO_DELETE_ORGANIZATION = 'The organization was deleted succesfully!';
export const INFO_FIND_0_TRIBES = 'There is not tribes yet into the DB.';
export const INFO_FIND_ALL_TRIBES = 'Find tribes succesfully!';
export const INFO_FIND_0_TRIBE = 'The tribe that you are looking for does not exist into the DB. Tribe ID: ';
export const INFO_FIND_ONE_TRIBE = 'The tribe was found succesfully!';
export const INFO_STORE_TRIBE = 'The tribe was stored succesfully!';
export const INFO_UPDATE_TRIBE = 'The tribe was updated succesfully!';
export const INFO_DELETE_TRIBE = 'The tribe was deleted succesfully!';
export const INFO_FIND_0_METRICS = 'There are not metrics with this search criteria.';
export const INFO_FIND_METRICS = 'Metrics was found succesfully!';

// ERROR MESSAGES
export const ERR_GETTING_ALL_ORGANIZATIONS = 'Error trying to get all organizations: ';
export const ERR_GETTING_ONE_ORGANIZATION = 'Error trying to get the organization: ';
export const ERR_DATA_FOR_GET_ORGANIZATION = 'The ID of organization is required.';
export const ERR_DELETING_ONE_ORGANIZATION = 'Error trying to delete the organization: ';
export const ERR_DATA_FOR_STORE_ORGANIZATION = 'The "name" and "status" fields are required to store a new Organization';
export const ERR_DATA_FOR_UPDATE_ORGANIZATION = 'The "name" and "status" fields are required to update an Organization';
export const ERR_STORE_ORGANIZATIONS = 'An error occurred while trying to store the Organization in the DB';
export const ERR_STORE_ORGANIZATIONS_DUPLICATE = 'This organization already exist into DB. The organization name must be unique.';
export const ERR_GETTING_ALL_TRIBES = 'Error trying to get all tribes: ';
export const ERR_GETTING_ONE_TRIBE = 'Error trying to get the tribe: ';
export const ERR_DATA_FOR_GET_TRIBE = 'The ID of tribe is required.';
export const ERR_DELETING_ONE_TRIBE = 'Error trying to delete the tribe: ';
export const ERR_DATA_FOR_STORE_TRIBE = 'The "name" and "status" fields are required to store a new Tribe';
export const ERR_DATA_FOR_UPDATE_TRIBE = 'The "name" and "status" fields are required to update an Tribe';
export const ERR_STORE_TRIBES = 'An error occurred while trying to store the tribe in the DB';
export const ERR_STORE_TRIBES_DUPLICATE = 'This tribe already exist into DB. The tribe name must be unique.';
export const ERR_DATA_FOR_GET_METRICS_BY_TRIBE = 'The ID of tribe is required.';
export const ERR_WRONG_TYPE_ID = 'Wrong ID format! The ID of tribe must be an unique number with 18 digits, like this -> "000000000000000000"';
export const ERR_WRONG_REPO_STATE = 'Bad status for the repository, valid codes for a repository status are E, D or A!';
export const ERR_GETTING_METRICS_DATA = 'Error trying to get the metrics data: ';

// WARNING MESSAGES
export const WAR_REQUEST_RECEIVED_PAGE_404 = 'Did you write the URL request correctly? Page not found!';
//#endregion MESSAGES

//#region ROUTES
// MOCK ROUTE
export const ENDPOINT_MOCK = '/mockservice';

// ORGANIZATION ROUTES
export const ENDPOINT_ORGANIZATIONS = '/organizations';
export const ENDPOINT_GET_ONE_ORGANIZATION = `${ENDPOINT_ORGANIZATIONS}/:id`;
export const ENDPOINT_GET_ORGANIZATIONS = `${ENDPOINT_ORGANIZATIONS}`;
export const ENDPOINT_POST_ORGANIZATION = `${ENDPOINT_ORGANIZATIONS}`;
export const ENDPOINT_PUT_ORGANIZATION = `${ENDPOINT_ORGANIZATIONS}/:id`;
export const ENDPOINT_DELETE_ORGANIZATION = `${ENDPOINT_ORGANIZATIONS}/:id`;

// TRIBES ROUTES
export const ENDPOINT_TRIBES = '/tribes';
export const ENDPOINT_GET_TRIBE = `${ENDPOINT_TRIBES}/:id`;

// METRICS ROUTES
export const ENDPOINT_METRICS = '/metrics';
export const ENDPOINT_GET_METRICS = `${ENDPOINT_METRICS}/:id`;
//#endregion ROUTES

//#region DEFAULT VALUES
export const DEF_REPOSITORY_DATE = `2022-01-01`;
export const DEF_REPOSITORY_STATE = 'E';
export const DEF_METRIC_COVERAGE = 0.75;

// Code Verification
export const DEF_CODE_VERIFIED = 604;
export const DEF_CODE_AWAIT = 605;
export const DEF_CODE_APPROVED = 606;
export const DEF_VERIFIED = 'Verificado';
export const DEF_AWAIT = 'En espera';
export const DEF_APPROVED = 'Aprobado';

// Repositories state
export const DEF_CODE_ENABLE = 'E';
export const DEF_CODE_DISABLE = 'D';
export const DEF_CODE_ARCHIVED = 'A';
export const DEF_STATE_ENABLE = 'Habilitado';
export const DEF_STATE_DISABLE = 'Desabilitado';
export const DEF_STATE_ARCHIVED = 'Archivado';

//#endregion DEFAULT VALUES
