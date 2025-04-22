import { Response, Request } from "express"
import createUserService from "../../services/user/createUser.service"

const createUserController = async (req: Request, res: Response) => {
    try {
        const user = req.body
        const newUser = await createUserService(user)

        const {...newUserRest} = newUser

        return res.status(201).json(newUserRest);

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }

}

export default createUserController;
