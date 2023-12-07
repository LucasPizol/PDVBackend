import express from "express";
import { CustomerController } from "./controllers/customerController";
import { AuthController } from "./controllers/authController";
import { Auth } from "./middleware/auth";
import { PdvController } from "./controllers/pdvController";
const router = express.Router();

router.get("/customers", Auth.ensureAuth, CustomerController.get);
router.post("/customers", Auth.ensureAuth, CustomerController.create);

router.get("/pdv", Auth.ensureAuth, PdvController.get);
router.post("/pdv", Auth.ensureAuth, PdvController.create);
router.delete("/pdv/:id", Auth.ensureAuth, PdvController.delete);
router.put("/pdv/:id", Auth.ensureAuth, PdvController.update);

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

export { router };
