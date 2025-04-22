import { Request, Response } from "express";
import listProductsService from "../../services/product/listProducts.service";

const listProductsController = async (req: Request, res: Response) => {
    try {
      const users = await listProductsService()

      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default listProductsController;
