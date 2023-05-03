"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Conversations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Conversations.belongsTo(models.Users, {
        foreignKey: "memberTwoId",
        targetKey: "id",
        as: "userSendData",
      });
    }
  }
  Conversations.init(
    {
      memberOneId: DataTypes.INTEGER,
      memberTwoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Conversations",
    }
  );
  return Conversations;
};
