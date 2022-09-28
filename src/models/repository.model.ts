
// Libraries
import { DataTypes, Model, Sequelize } from 'sequelize';

/**
 * Model Repository
 */
export default (sequelize: Sequelize) => {
  class Repository extends Model {
    create_time: string;
    id_tribe: number;
    name: string;
    state: string;
    status: string;
  }

  const model = {
    create_time: {
      allowNull: false,
      type: DataTypes.DATE(),
    },
    id_repository: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_tribe: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique: true,
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(1),
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING(1),
    },
  };

  Repository.init(model, {
    freezeTableName: true,
    modelName: 'repository',
    sequelize,
    tableName: 'repository',
  });

  Repository.sync();

  return Repository;
};
