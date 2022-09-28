
// Libraries
import { DataTypes, Model, Sequelize } from 'sequelize';

/**
 * Model Organization
 */
export default (sequelize: Sequelize) => {
  class Organization extends Model {
    name: string;
    status: number;
  }

  const model = {
    id_organization: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
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

  Organization.init(model, {
    freezeTableName: true,
    modelName: 'organization',
    sequelize,
    tableName: 'organization',
  });

  Organization.sync();

  return Organization;
};
