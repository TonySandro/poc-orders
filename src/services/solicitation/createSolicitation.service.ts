
import AppDataSource from "../../data-source";
import { Solicitation } from "../../entities/solicitation.entity";
import { User } from "../../entities/user.entity";
import { Wastes } from "../../entities/wastes.entity";
import { ISolicitationRequest } from "../../interfaces/solicitation";


const createSolicitationService = async (solicitation_request:ISolicitationRequest): Promise<Solicitation> => {
    const wastesRepository = AppDataSource.getRepository(Wastes)
    const solicitationRepository = AppDataSource.getRepository(Solicitation)
    const usersRepository  = AppDataSource.getRepository(User)
    const user = await usersRepository.findOneBy({ user_id: solicitation_request.user_id });
    if(!user){
      return new Solicitation
    }
    if(solicitation_request.wastes.length === 0){
      return new Solicitation
    }
    const solicitation =  solicitationRepository.create({...solicitation_request,update_date: new Date,users:user});
    const response = await solicitationRepository.save(solicitation)

    solicitation_request.wastes.forEach(async element => {
      const waste  = wastesRepository.create({...element,solicitaiton:solicitation});
      await wastesRepository.save(waste)
    });

    return solicitation;

}

export default createSolicitationService;
