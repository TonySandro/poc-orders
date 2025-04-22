import { Request, Response } from "express"
import deleteSolicitationService from "../../services/solicitation/deleteSolicitation.service"


const deleteSolicitationController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const message = await deleteSolicitationService(parseInt(id))
    return res.status(204).json({
      message: message
     })
  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
          message: error.message
      })
  }
}
  }
export default deleteSolicitationController;