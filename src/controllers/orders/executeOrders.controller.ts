import { Request, Response } from "express"
import { SL_CLOSED } from "../../constants/constants"
import executeOrdersService from "../../services/orders/executeOrders.service"

const executeOrdersController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id)
    const order = req.body
    if(order.status != SL_CLOSED){
      await executeOrdersService(id,order)
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

export default executeOrdersController;
