import { Request, Response } from "express";
import findBySoliciationService from "../../services/solicitation/findBySolicitation.service";



const findBySolicitationController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id)
      const users = await findBySoliciationService(id)

      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

findBySolicitationController