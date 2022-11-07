"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // : DataTypes.STRING,
      // : DataTypes.STRING,
      // : DataTypes.STRING,
      // : DataTypes.STRING,
      // : DataTypes.STRING,
      // : DataTypes.STRING,
      // : DataTypes.STRING,
      // : DataTypes.STRING,
      // : DataTypes.STRING("long"),
      // : DataTypes.STRING("long"),
      // : DataTypes.STRING("long"),
      // : DataTypes.STRING("long"),

      image: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      brain: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      likeCounts: {
        type: Sequelize.INTEGER,
      },
      group: {
        type: Sequelize.STRING,
      },
      sale: {
        type: Sequelize.STRING,
      },
      descriptionHTML: {
        type: Sequelize.TEXT("long"),
      },
      descriptionMarkdown: {
        type: Sequelize.TEXT("long"),
      },
      informationHTML: {
        type: Sequelize.TEXT("long"),
      },
      informationMarkdown: {
        type: Sequelize.TEXT("long"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
