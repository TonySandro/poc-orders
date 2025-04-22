import { Request, Response } from "express"
import updateSolicitationService from "../../services/solicitation/updateSolicitation.service"
import { SL_CANCEL, SL_CLOSED } from "../../constants/constants"
import updateStatusSolicitationService from "../../services/solicitation/updateStatusSolicitation.service"

const updateStatusSolicitationController = async (req: Request, res: Response) => {
  try {
    const solicitation = req.body
    const response = await updateStatusSolicitationService(solicitation)
    return res.status(200).json(response)
  } catch (error) {
    if(error instanceof Error) {
      return res.status(401).json({
        message: error.message
      })
    }


  }
}

export default updateStatusSolicitationController;
