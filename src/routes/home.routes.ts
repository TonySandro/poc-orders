import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import findByTokenUser from "../controllers/home/home.controller";

const homeRoutes = Router();

homeRoutes.get("", verifyTokenMiddleware,findByTokenUser);

export default homeRoutes;
