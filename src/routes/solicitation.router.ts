import { Router } from "express";
import createSolicitationController from "../controllers/solicitation/createSolicitation.controller";
import listSolicitationController from "../controllers/solicitation/listSolicitation.controller";
import findByUserSolicitationController from "../controllers/solicitation/findByUserSolicitation.service";
import updateSolicitationController from "../controllers/solicitation/updateSolicitation.controller";
import deleteSolicitationService from "../services/solicitation/deleteSolicitation.service";
import findBySoliciationService from "../services/solicitation/findBySolicitation.service";
import cancelSolicitationController from "../controllers/solicitation/cancelSolciitation.controller";
import listFuncSolicitationController from "../controllers/solicitation/listFuncSolicitaiton.controller";
import updateStatusSolicitationController from "../controllers/solicitation/updateStatusSolicitationService";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";



const solicitationRoutes = Router()

solicitationRoutes.post("",verifyTokenMiddleware,createSolicitationController);
solicitationRoutes.patch("/:id",verifyTokenMiddleware,updateSolicitationController);
solicitationRoutes.delete("/:id",verifyTokenMiddleware,deleteSolicitationService)
solicitationRoutes.get("",verifyTokenMiddleware,listSolicitationController);
solicitationRoutes.get("/user/:id",verifyTokenMiddleware,findByUserSolicitationController);
solicitationRoutes.get("/:id",verifyTokenMiddleware,findBySoliciationService)
solicitationRoutes.put("/:id",verifyTokenMiddleware,cancelSolicitationController)
solicitationRoutes.get("/list/func",verifyTokenMiddleware,listFuncSolicitationController);
solicitationRoutes.patch("/status/update",verifyTokenMiddleware,updateStatusSolicitationController);

export default solicitationRoutes;
