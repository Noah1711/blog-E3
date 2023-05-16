const { Model, DataTypes } = require("sequelize");

class Role extends Model {
  static initModel(sequelize) {
    Role.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        roleName: {
          type: DataTypes.STRING(100),
          allownull: false,
        },
        description: {
          type: DataTypes.STRING(1000),
          allownull: false,
        },
        code: {
          type: DataTypes.INTEGER.UNSIGNED,
          allownull: false,
        },
      },
      {
        sequelize,
        modelName: "role",
        timestamps: false,
      }
    );
    return Role;
  }
}

module.exports = Role;
