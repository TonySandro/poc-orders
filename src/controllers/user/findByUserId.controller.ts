import { Request, Response } from "express";
import findByUserIdService from "../../services/user/findByUserId.service";



const findByIdUserController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id)
      const users = await findByUserIdService(id)
      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default findByIdUserController;
