"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.Allcodes, {
        foreignKey: "brain",
        targetKey: "keyMap",
        as: "brainData",
      });
    }
  }
  Products.init(
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      brain: DataTypes.STRING,
      priceUp: DataTypes.STRING,
      priceDown: DataTypes.STRING,
      color: DataTypes.STRING,
      ram: DataTypes.STRING,
      rom: DataTypes.STRING,
      screen: DataTypes.STRING,
      card: DataTypes.STRING,
      group: DataTypes.STRING,
      sale: DataTypes.STRING,

      camera: DataTypes.STRING,
      cpu: DataTypes.STRING,
      origin: DataTypes.STRING,
      amount: DataTypes.STRING,
      status: DataTypes.STRING,
      contentMarkdown: DataTypes.TEXT,
      contentHTML: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
