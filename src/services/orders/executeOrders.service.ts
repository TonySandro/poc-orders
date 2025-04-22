import { SL_CLOSED } from "../../constants/constants";
import AppDataSource from "../../data-source";
import { Orders } from "../../entities/orders.entity";
import { IOrdersUpdateRequest } from "../../interfaces/orders";
import updateUserSubPointsService from "../user/updateUserSubPoints.service";

const executeOrdersService = async (order_id:number,order_request: IOrdersUpdateRequest): Promise<Orders> => {
    
  const orderRepository = AppDataSource.getRepository(Orders);
  const order = await orderRepository.findOne({
    where:{
      order_id:order_id
    }
  })

  if(!order){
    return new Orders
  }
  // if(order.status === SL_CLOSED){
  //     return new Orders
  // }
  const user = await updateUserSubPointsService(parseInt(order_request.user_id),order.points)

  const newOrders = {...order_request,status:SL_CLOSED}

  // await orderRepository.update(order_id, {status:newOrders.status,update_date:newOrders.update_date})

  const orderUpdate = await orderRepository.findOneBy({order_id:order_id})

  return new Orders;

}
export default executeOrdersService;
