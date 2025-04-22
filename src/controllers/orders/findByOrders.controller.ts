import { Request, Response } from "express";
import findByOrderService from "../../services/orders/findByOrder.service";

const findByOrdersController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id)
      const users = await findByOrderService(id)

      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default findByOrdersController