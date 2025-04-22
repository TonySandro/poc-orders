import { Router } from "express";
import createOrdersController from "../controllers/orders/createOrders.controller";
import deleteOrderService from "../services/orders/deleteOrder.service";
import listOrdersController from "../controllers/orders/listSolicitation.controller";
import findByUserOrdersController from "../controllers/orders/findByUserSolicitation.service";
import findByOrderService from "../services/orders/findByOrder.service";
import executeOrdersController from "../controllers/orders/executeOrders.controller";


const ordersRoutes = Router()

ordersRoutes.post("",createOrdersController);
ordersRoutes.patch("/:id",executeOrdersController);
ordersRoutes.delete("/:id",deleteOrderService)
ordersRoutes.get("",listOrdersController);
ordersRoutes.get("/user/:id",findByUserOrdersController);
ordersRoutes.get("/:id",findByOrderService)

export default ordersRoutes;
