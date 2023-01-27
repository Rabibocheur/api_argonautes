"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Argonaute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Argonaute.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "argonautes",
      modelName: "Argonaute",
    }
  );
  return Argonaute;
};
