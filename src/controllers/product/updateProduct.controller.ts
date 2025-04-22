import { Request, Response } from "express"
import updateProductService from "../../services/product/updateProducts.service"


const updateProductController = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const id = parseInt(req.params.id)

    await updateProductService(id,user)

    return res.status(200).json({
    message: "Product successfully updated"
    })
  } catch (error) {
    if(error instanceof Error) {
      return res.status(401).json({
        message: error.message
      })
    }


  }
}

export default updateProductController;
