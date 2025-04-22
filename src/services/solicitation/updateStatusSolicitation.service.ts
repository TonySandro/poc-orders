import { SL_CLOSED, SL_OPEN, SL_PENDING } from "../../constants/constants";
import AppDataSource from "../../data-source";
import { Solicitation } from "../../entities/solicitation.entity";
import { ISolicitationUpdate } from "../../interfaces/solicitation";
import updateUserAddPointsService from "../user/updateUserAddPoints.service";
import lisFuncSolicitationService from "./listFuncSolicitation.service";

const updateStatusSolicitationService = async (solicitation_request:ISolicitationUpdate): Promise<Solicitation[]> => {
    
  const solicitationRepository = AppDataSource.getRepository(Solicitation);
  const solicitation = await solicitationRepository.findOne({
    where:{
      solicitation_id:solicitation_request.solicitation_id
    },
    relations: {
      users: true,
    }
  })
  if(!solicitation){
    return []
  }
  if(solicitation.status === SL_OPEN && solicitation_request.status === SL_PENDING){
       const newSolicitation = {...solicitation,status:solicitation_request.status}
       await solicitationRepository.save(newSolicitation)
       const solicitationUpdate = await lisFuncSolicitationService()
       return solicitationUpdate ||  [];
  }else if(solicitation.status === SL_PENDING && solicitation_request.status === SL_CLOSED){
    debugger
    const newSolicitation = {...solicitation,status:solicitation_request.status}
    await solicitationRepository.save(newSolicitation)
    await updateUserAddPointsService(solicitation.users.user_id,solicitation_request.points)
    const solicitationUpdate = await lisFuncSolicitationService()
    return solicitationUpdate ||  [];
}

  return [];

}
export default updateStatusSolicitationService;
