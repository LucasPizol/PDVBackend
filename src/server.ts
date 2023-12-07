import express from "express";
import cors from "cors";
import { router } from "./routes";
import { sequelize } from "./database";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(router);

const PORT = 3000;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connection successfully");
  } catch (e) {
    console.log("Erro");
  }

  console.log("Server started sucessfully");
});
