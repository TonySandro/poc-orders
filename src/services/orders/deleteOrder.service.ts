import AppDataSource from "../../data-source";
import { Orders } from "../../entities/orders.entity";

const deleteOrderService = async (order_id: number) => {

  const servicoRepository = AppDataSource.getRepository(Orders);

  await servicoRepository.delete(order_id)
  
  return "Deletado com sucesso"
}


export default deleteOrderService;
