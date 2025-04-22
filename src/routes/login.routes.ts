import { Router } from "express";
import { loginController } from "../controllers/login/login.controller";
import { verifyUser } from "../middlewares/verifyUser.middleware";

const loginRoutes = Router();

loginRoutes.post("", verifyUser,loginController);

export default loginRoutes;
