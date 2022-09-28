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
    // const db_password = config.PPUP1_DB_PASSWORD;

    const sequelize = new Sequelize('postgresql://juan:Ddxmq4dmNyvEw-FUHxcLBQ@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dpichincha-nodejs-3752', {
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
    db.metric.hasOne(db.repository, { foreignKey: 'id_repository' });
    db.repository.belongsTo(db.metric, { foreignKey: 'id_repository' });

    return resolve(db);
  });
};

export default init;
