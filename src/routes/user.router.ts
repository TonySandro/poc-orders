import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import listUsersController from "../controllers/user/listUsers.controller";
import findByIdUserController from "../controllers/user/findByUserId.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import { validSerializerMiddleware } from "../middlewares/validSerializer.middleware";
import { userCreateSerializer } from "../serializers/user.serializer";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";


const UserRoutes = Router()

UserRoutes.post("",validSerializerMiddleware(userCreateSerializer),createUserController);
UserRoutes.get("",listUsersController);
UserRoutes.get("/:id",findByIdUserController);
UserRoutes.patch("/:id",verifyTokenMiddleware,updateUserController)
UserRoutes.delete("/:id",verifyTokenMiddleware,deleteUserController)

export default UserRoutes;
