import { SL_CLOSED } from "../../constants/constants";
import AppDataSource from "../../data-source";
import { Solicitation } from "../../entities/solicitation.entity";
import { ISolicitationUpdate } from "../../interfaces/solicitation";
import updateUserAddPointsService from "../user/updateUserAddPoints.service";

const updateSolicitationService = async (solicitation_id:number,solicitation_request: Solicitation): Promise<Solicitation> => {
    
  const solicitationRepository = AppDataSource.getRepository(Solicitation);
  const solicitation = await solicitationRepository.findOne({
    where:{
      solicitation_id:solicitation_id
    }
  })
  if(!solicitation){
    return new Solicitation
  }
  if(solicitation_request.isReceive && solicitation.status != SL_CLOSED){
      const user = await updateUserAddPointsService(solicitation.solicitation_id,solicitation_request.points)
  }
  
  const newStatus = solicitation_request.isReceive ? SL_CLOSED : solicitation_request.status
  const newSolicitation = {...solicitation_request,status:newStatus}
  await solicitationRepository.update(solicitation_id, newSolicitation)

  const solicitationUpdate = await solicitationRepository.findOneBy({solicitation_id:solicitation_id})

  return new Solicitation;

}
export default updateSolicitationService;
