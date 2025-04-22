
import AppDataSource from "../../data-source";
import { Orders } from "../../entities/orders.entity";
import { User } from "../../entities/user.entity";
import { IOrdersRequest } from "../../interfaces/orders";
import updateUserSubPointsService from "../user/updateUserSubPoints.service";

const createOrdersService = async (order_request:IOrdersRequest): Promise<User> => {
    const orderRepository = AppDataSource.getRepository(Orders)

    const order = orderRepository.create({...order_request,create_date:new Date,update_date:new Date});

    const response = await orderRepository.save(order)
     
    const user = await updateUserSubPointsService(order_request.user_id,order_request.points)

    return user;

}

export default createOrdersService;
