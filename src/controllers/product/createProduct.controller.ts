import { Response, Request } from "express"
import createProductService from "../../services/product/createProduct.service"


const createProductController = async (req: Request, res: Response) => {
    try {
        const user = req.body

        const newProduct = await createProductService(user)

        const {...newProductRest} = newProduct

        return res.status(201).json(newProductRest);

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }

}

export default createProductController;
