
// Libraries
import { DataTypes, Model, Sequelize } from 'sequelize';

/**
 * Model Metric
 */
export default (sequelize: Sequelize) => {
  class Metric extends Model {
    bugs: number;
    code_smells: number;
    coverage: number;
    hotspot: number;
    id_repository: number;
    vulnerabilities: number;
  }

  const model = {
    id_metric: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    // tslint:disable-next-line: object-literal-sort-keys
    bugs: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    code_smells: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    coverage: {
      allowNull: false,
      type: DataTypes.DOUBLE,
    },
    hotspot: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    id_repository: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    vulnerabilities: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  };

  Metric.init(model, {
    freezeTableName: true,
    modelName: 'metric',
    sequelize,
    tableName: 'metric',
  });

  Metric.sync();

  return Metric;
};
