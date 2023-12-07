import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Pdv {
  id: number;
  customerCod: string;
  imgUrl1: string;
  imgUrl2: string;
  approved: boolean;
  returnDesc: string;
}

export interface PdvCreationAttributes extends Optional<Pdv, "id"> {}

export interface PdvInstance extends Model<Pdv, PdvCreationAttributes>, Pdv {}

export const Pdv = sequelize.define<PdvInstance, Pdv>("Pdv", {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  customerCod: {
    allowNull: false,
    type: DataTypes.STRING,
    references: { model: "customers", key: "cod" },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
  imgUrl1: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  imgUrl2: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  approved: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
  },
  returnDesc: {
    allowNull: true,
    type: DataTypes.STRING,
  },
});
