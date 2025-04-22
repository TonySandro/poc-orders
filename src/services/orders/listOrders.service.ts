import AppDataSource from "../../data-source";
import { Orders } from "../../entities/orders.entity";


const listOrdersService = async () :Promise<Orders[]> => {
    const orderRepository = AppDataSource.getRepository(Orders)
    const response = await orderRepository.find()
    const order = response.map(element => {
      return element;
    })

    return order ? order : [];
}

export default listOrdersService;
