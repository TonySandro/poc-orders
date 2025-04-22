import { Request, Response } from "express"
import updateUserService from "../../services/user/updateUser.service"

const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const id = parseInt(req.params.id)

    const newUserRest = await updateUserService(id,user)

    return res.status(201).json(newUserRest);
  } catch (error) {
    if(error instanceof Error) {
      return res.status(401).json({
        message: error.message
      })
    }


  }
}

export default updateUserController;
