// Libraries
import { Op, Sequelize } from 'sequelize';

// Config Vars
import * as config from '../../configVars';

// Models
import metric from './metric.model';
import organization from './organization.model';
import repository from './repository.model';
import tribe from './tribe.model';

export const init = async () => {
  return new Promise(async (resolve, reject) => {
    const connString = `postgresql://${config.PPUP1_DB_USER}:${config.PPUP1_DB_PASSWORD}@${config.PPUP1_DB_HOST}:${config.PPUP1_DB_PORT}/${config.PPUP1_DB_NAME}?sslmode=verify-full&options=--cluster%3Dkeen-wisp-5309`;

    const sequelize = new Sequelize(connString, {
      define: {
        timestamps: false, // This flag is sent to avoid an error, because in the DB tables, there is no field called 'createdAt'.
      },
      dialect: 'mysql',
      // host: config.PPUP1_DB_HOST,
      logging: false,
      pool: {
        acquire: 30000,
        idle: 10000,
        max: Number(config.POOL_MAX),
        min: Number(config.POOL_MIN),
      },
    });

    sequelize.sync();

    const db = {
      Op,
      Sequelize,
      metric: metric(sequelize),
      organization: organization(sequelize),
      repository: repository(sequelize),
      sequelize,
      tribe: tribe(sequelize),
    };

    // Tribe relationship
    db.tribe.belongsTo(db.organization, { foreignKey: 'id_organization' });
    db.organization.hasOne(db.tribe, { foreignKey: 'id_organization' });

    // Repository relationship
    db.tribe.hasOne(db.repository, { foreignKey: 'id_tribe' });
    db.repository.belongsTo(db.tribe, { foreignKey: 'id_tribe' });

    // Metrics relationship
    db.repository.hasOne(db.metric, { foreignKey: 'id_repository' });
    db.metric.belongsTo(db.repository, { foreignKey: 'id_repository' });

    return resolve(db);
  });
};

export default init;
