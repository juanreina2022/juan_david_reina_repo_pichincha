
// Libraries
import { DataTypes, Model, Sequelize } from 'sequelize';

/**
 * Model Tribe
 */
export default (sequelize: Sequelize) => {
  class Tribe extends Model {
    id_organization: number;
    name: string;
    status: number;
  }

  const model = {
    id_tribe: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    // tslint:disable-next-line: object-literal-sort-keys
    id_organization: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique: true,
    },
    status: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  };

  Tribe.init(model, {
    freezeTableName: true,
    modelName: 'tribe',
    sequelize,
    tableName: 'tribe',
  });

  Tribe.sync();

  return Tribe;
};
