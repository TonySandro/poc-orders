import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";

const findByProductIdService = async (product_id:number):Promise<Product> => {

  const productRepository = AppDataSource.getRepository(Product);
  const product = await productRepository.findOne({
    where:{
      product_id:product_id
    }
  })
  return product ? product : new Product

}


export default findByProductIdService;
