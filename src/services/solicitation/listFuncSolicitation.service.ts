import AppDataSource from "../../data-source";
import { Solicitation } from "../../entities/solicitation.entity";
import { User } from "../../entities/user.entity";

const lisFuncSolicitationService = async ():Promise<Solicitation[]> => {
  const solicitationRepository = AppDataSource.getRepository(Solicitation);
  const solicitations = await solicitationRepository.createQueryBuilder('Solicitation')
  .leftJoinAndSelect('Solicitation.wastes','Wastes')
  .leftJoinAndSelect('Solicitation.users','User')
  .leftJoinAndSelect('User.address','Address')
  .where('status != :status_cancel', { status_cancel: "CANCELADO" })
  .getMany();
  if(solicitations.length === 0){
    return []
  }
  return solicitations.sort((a, b) => a.status.localeCompare(b.status));
}


export default lisFuncSolicitationService;
