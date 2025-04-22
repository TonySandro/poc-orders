import { Request, Response } from "express";
import findByUserOrdersService from "../../services/orders/findByUserOrders.service";

const findByUserOrdersController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id)
      const orders = await findByUserOrdersService(id)
      
      return res.status(200).json(orders);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default findByUserOrdersController;
