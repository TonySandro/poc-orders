import { Response, Request } from "express"
import createSolicitationService from "../../services/solicitation/createSolicitation.service"


const createSolicitationController = async (req: Request, res: Response) => {
    try {
        const user = req.body
        const newSolicitation = await createSolicitationService(user)

        const {...newSolicitationRest} = newSolicitation

        return res.status(201).json(newSolicitationRest);

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }

}

export default createSolicitationController;
