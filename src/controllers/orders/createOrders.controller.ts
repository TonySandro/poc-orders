import { Response, Request } from "express"
import createOrdersService from "../../services/orders/createOrder.service"

const createOrdersController = async (req: Request, res: Response) => {
    try {
        const user = req.body

        const newOrders = await createOrdersService(user)

        const {...newOrdersRest} = newOrders

        return res.status(201).json(newOrdersRest);

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }

}

export default createOrdersController;
