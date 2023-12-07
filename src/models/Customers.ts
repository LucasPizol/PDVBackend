import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Customer {
  cod: number;
  razaoSocial: string;
  cidade: string;
  logradouro: string;
  numero: number;
  userCod: string;
}

export interface CustomerCreationAttributes extends Optional<Customer, "cod"> {}

export interface CustomerInstance extends Model<Customer, CustomerCreationAttributes>, Customer {}

export const Customer = sequelize.define<CustomerInstance, Customer>("Customer", {
  cod: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  razaoSocial: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cidade: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  logradouro: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  numero: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userCod: {
    allowNull: false,
    type: DataTypes.STRING,
    references: { model: "users", key: "cod" },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
});
