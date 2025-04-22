import AppDataSource from "../../data-source";
import { IProductRequest } from "../../interfaces/product";
import { Product } from "../../entities/product.entity";

const createProductService = async (product_request:IProductRequest): Promise<Product> => {

    const productRepository = AppDataSource.getRepository(Product)

    const product =  productRepository.create(product_request);

    await productRepository.save(product)

    return product;

}

export default createProductService;
