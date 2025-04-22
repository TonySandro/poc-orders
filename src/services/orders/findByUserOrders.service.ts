import AppDataSource from "../../data-source";
import { Orders } from "../../entities/orders.entity";


const findByUserOrdersService = async (user_id:number):Promise<Orders[]> => {
  const orderRepository = AppDataSource.getRepository(Orders);
  // const orders = await orderRepository.find({
  //   where:{
  //     user_id:user_id
  //   }
  // })
  return []

}

export default findByUserOrdersService;
