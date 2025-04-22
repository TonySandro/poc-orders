import { Request, Response } from "express"
import updateSolicitationService from "../../services/solicitation/updateSolicitation.service"
import { SL_CANCEL, SL_CLOSED } from "../../constants/constants"

const updateSolicitationController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const solicitation = req.body
    if(solicitation.status != SL_CLOSED && solicitation.status != SL_CANCEL){
      await updateSolicitationService(id,solicitation)
      return res.status(200).json({
        message: "Servico successfully updated"
        })
    }
    return res.status(200).json({
      message: "Está solicitação já foi fechada"
    })

  } catch (error) {
    if(error instanceof Error) {
      return res.status(401).json({
        message: error.message
      })
    }


  }
}

export default updateSolicitationController;
