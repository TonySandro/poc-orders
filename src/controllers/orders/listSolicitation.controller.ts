import { Request, Response } from "express";
import listOrdersService from "../../services/orders/listOrders.service";

const listOrdersController = async (req: Request, res: Response) => {
    try {
      const orders = await listOrdersService()

      return res.status(200).json(orders);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default listOrdersController;
