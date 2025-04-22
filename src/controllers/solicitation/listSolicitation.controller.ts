import { Request, Response } from "express";
import listSolicitationService from "../../services/solicitation/listSolicitation.service";


const listSolicitationController = async (req: Request, res: Response) => {
    try {
      const users = await listSolicitationService()

      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default listSolicitationController;
