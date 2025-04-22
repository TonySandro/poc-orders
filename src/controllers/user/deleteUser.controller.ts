import { Request, Response } from "express"
import deleteUserService from "../../services/user/deleteUser.service"

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await deleteUserService(parseInt(id))
    return res.status(204).send()
  } catch (error) {
      if(error instanceof Error){
        return res.status(400).json({
            message: error.message
            })
        }
    }
}
export default deleteUserController;