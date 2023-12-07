"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pdvs", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      customer_cod: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "customers", key: "cod" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      img_url1: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      img_url2: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      approved: {
        allowNull: true,
        type: Sequelize.DataTypes.BOOLEAN,
      },
      return_desc: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pdvs");
  },
};
