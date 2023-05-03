"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bookings.belongsTo(models.Products, {
        foreignKey: "idProduct",
        targetKey: "id",
        as: "productData",
      });
    }
  }
  Bookings.init(
    {
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      idProduct: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Bookings",
    }
  );
  return Bookings;
};
