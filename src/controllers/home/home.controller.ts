import { Request, Response } from "express";
import findByUserIdService from "../../services/user/findByUserId.service";

const findByTokenUser = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.user.id)
      const users = await findByUserIdService(id)
      return res.status(200).json(users);
    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default findByTokenUser;
