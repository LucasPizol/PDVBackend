"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("customers", {
      cod: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      razao_social: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      cidade: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      logradouro: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      numero: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      user_cod: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        references: { model: "users", key: "cod" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
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
    await queryInterface.dropTable("customers");
  },
};
