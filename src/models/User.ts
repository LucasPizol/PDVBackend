import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "../database";

export interface User {
  email: number;
  cod: string;
}

export interface UserCreationAttributes extends Optional<User, "cod"> {}

export interface UserInstance extends Model<User, UserCreationAttributes>, User {}

export const User = sequelize.define<UserInstance, User>("User", {
  cod: {
    allowNull: false,
    type: DataTypes.STRING,
    primaryKey: true,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});
