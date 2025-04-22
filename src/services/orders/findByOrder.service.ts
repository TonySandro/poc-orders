import AppDataSource from "../../data-source";
import { Orders } from "../../entities/orders.entity";

const findByOrderService = async (order_id:number):Promise<Orders> => {

  const soliciationRepository = AppDataSource.getRepository(Orders);
  const order= await soliciationRepository.findOne({
    where:{
      order_id:order_id
    }
  })
  return order ? order : new Orders

}


export default findByOrderService;
