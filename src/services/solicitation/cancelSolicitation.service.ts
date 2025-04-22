import { SL_CANCEL, SL_CLOSED } from "../../constants/constants";
import AppDataSource from "../../data-source";
import { Solicitation } from "../../entities/solicitation.entity";
import { ISolicitationUpdate } from "../../interfaces/solicitation";
import updateUserAddPointsService from "../user/updateUserAddPoints.service";
import lisFuncSolicitationService from "./listFuncSolicitation.service";

const cancelSolicitationService = async (solicitation_id:number,solicitation_request: Solicitation): Promise<Solicitation[]> => {
  const solicitationRepository = AppDataSource.getRepository(Solicitation);
  const solicitation = await solicitationRepository.findOne({
    where:{
      solicitation_id:solicitation_id
    }
  })
  if(!solicitation){
    return []
  }

  if(solicitation.status === SL_CLOSED || solicitation.status === SL_CANCEL){
    return []
  }

  const newSolicitation = {...solicitation_request,status:SL_CANCEL}
  await solicitationRepository.update(solicitation_id, newSolicitation)

  const solicitationUpdate = await lisFuncSolicitationService()

  return solicitationUpdate || []

}
export default cancelSolicitationService;
