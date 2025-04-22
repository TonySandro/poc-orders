import { Request, Response } from "express"
import deleteOrderService from "../../services/orders/deleteOrder.service"

const deleteOrdersController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const message = await deleteOrderService(parseInt(id))
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
export default deleteOrdersController;