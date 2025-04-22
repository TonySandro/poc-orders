import { Request, Response } from "express";
import findByProductIdService from "../../services/product/findByProductId.service";

const findByIdProductController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id)
      const users = await findByProductIdService(id)

      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default findByIdProductController;
