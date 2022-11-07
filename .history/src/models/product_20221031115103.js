"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Products.init(
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      brain: DataTypes.STRING,
      price: DataTypes.STRING,
      color: DataTypes.STRING,
      likeCounts: DataTypes.INTEGER,
      group: DataTypes.STRING,
      sale: DataTypes.STRING,
      descriptionHTML: DataTypes.STRING("long"),
      descriptionMarkdown: DataTypes.STRING("long"),
      informationHTML: DataTypes.STRING("long"),
      informationMarkdown: DataTypes.STRING("long"),
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
