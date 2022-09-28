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
export const ENDPOINT_GET_TRIBES = `${ENDPOINT_TRIBES}`;
export const ENDPOINT_POST_TRIBE = `${ENDPOINT_TRIBES}`;
export const ENDPOINT_PUT_TRIBE = `${ENDPOINT_TRIBES}/:id`;
export const ENDPOINT_DELETE_TRIBE = `${ENDPOINT_TRIBES}/:id`;

// REPOSITORY ROUTES
export const ENDPOINT_GET_REPOSITORY = '/repository';
export const ENDPOINT_GET_REPOSITORIES = '/repositories';
export const ENDPOINT_POST_REPOSITORY = '/create_repository';
export const ENDPOINT_PUT_REPOSITORY = '/update_repository';
export const ENDPOINT_DELETE_REPOSITORY = '/delete_repository';

// METRICS ROUTES
export const ENDPOINT_GET_METRICS = '/metric';
export const ENDPOINT_GET_METRICSS = '/metrics';
export const ENDPOINT_POST_METRICS = '/create_metric';
export const ENDPOINT_PUT_METRICS = '/update_metric';
export const ENDPOINT_DELETE_METRICS = '/delete_metric';
//#endregion ROUTES
