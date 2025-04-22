import { Request, Response } from "express";
import findByUserSoliciationService from "../../services/solicitation/findByUserSolicitation.service";

const findByUserSolicitationController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id)
      const solicitations = await findByUserSoliciationService(id)
      
      return res.status(200).json(solicitations);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default findByUserSolicitationController;
