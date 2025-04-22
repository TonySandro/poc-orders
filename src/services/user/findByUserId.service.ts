import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const findByUserIdService = async (user_id:number):Promise<User> => {

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where:{
      user_id:user_id
    }
  })
  
  return user ? user : new User

}


export default findByUserIdService;
