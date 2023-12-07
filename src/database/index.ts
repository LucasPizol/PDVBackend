import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  define: {
    underscored: true,
  },
});
