import { Router } from "express";
import createProductController from "../controllers/product/createProduct.controller";
import listProductsController from "../controllers/product/listProduct.controller";
import findByIdProductController from "../controllers/product/findByProduct.controller";
import updateProductController from "../controllers/product/updateProduct.controller";
import deleteProductController from "../controllers/product/deleteProduct.controller";


const ProductRoutes = Router()

ProductRoutes.post("",createProductController);
ProductRoutes.get("",listProductsController);
ProductRoutes.get("/:id",findByIdProductController);
ProductRoutes.patch("/:id",updateProductController)
ProductRoutes.delete("/:id",deleteProductController)

export default ProductRoutes;
