import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";

const deleteProductService = async (product_id: number) => {

  const productRepository = AppDataSource.getRepository(Product);

  await productRepository.delete(product_id)
  
  return "Product deleted with success"
}

export default deleteProductService;
