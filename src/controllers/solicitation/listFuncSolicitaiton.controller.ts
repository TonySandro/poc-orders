import { Request, Response } from "express";
import lisFuncSolicitationService from "../../services/solicitation/listFuncSolicitation.service";


const listFuncSolicitationController = async (req: Request, res: Response) => {
    try {
      const users = await lisFuncSolicitationService()

      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default listFuncSolicitationController;
