import { Request, Response } from "express"
import deleteProductService from "../../services/product/deleteProduct.service"

const deleteProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const message = await deleteProductService(parseInt(id))
    console.log(message)
    return res.status(200).json({
      message: message
     })
  } catch (error) {
    let code = 400
    if(error instanceof Error){
      if(error.message === "You don't have admin permission"){
        code = 403
      }else if(error.message === "Id not found"){
        code = 404
      }
      return res.status(code).json({
       message: error.message
      })
    }
}
  }
export default deleteProductController;