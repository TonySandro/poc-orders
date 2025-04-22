import AppDataSource from "../../data-source";
import { Solicitation } from "../../entities/solicitation.entity";
import { ISolicitationRequest } from "../../interfaces/solicitation";


const findBySoliciationService = async (solicitation_id:number):Promise<Solicitation> => {

  const soliciationRepository = AppDataSource.getRepository(Solicitation);
  const solicitation= await soliciationRepository.findOne({
    where:{
      solicitation_id:solicitation_id
    }
  })
  return solicitation ? solicitation : new Solicitation

}


export default findBySoliciationService;
