import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";

const listProductsService = async () :Promise<Product[]> => {
    const productRepository = AppDataSource.getRepository(Product)
    const response = await productRepository.find()
    const products = response.map(product => {
      return product;
    })

    return products ? products : [];
}

export default listProductsService;
