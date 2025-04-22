import AppDataSource from "../../data-source";
import { Solicitation } from "../../entities/solicitation.entity";
import { User } from "../../entities/user.entity";

const findByUserSoliciationService = async (user_id:number):Promise<Solicitation[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where:{
      user_id:user_id
    }
  })
  if(!user){
    return []
  }
  return user.solicitations.sort((a, b) => a.status.localeCompare(b.status));

}


export default findByUserSoliciationService;
