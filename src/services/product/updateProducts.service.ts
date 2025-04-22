import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { IProductRequest } from "../../interfaces/product";

const updateProductService = async ( product_id:number,product_request: IProductRequest): Promise<Product> => {
  const productRepository = AppDataSource.getRepository(Product);
  const product = await productRepository.findOne({
    where:{
      product_id:product_id
    }
  })

  if(!product){
    return new Product
  }

  await productRepository.update( product_id, product_request)

  const productUpdate = await productRepository.findOneBy({product_id})

  return productUpdate!;

}


export default updateProductService;
