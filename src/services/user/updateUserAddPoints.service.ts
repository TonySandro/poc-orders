import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const updateUserAddPointsService = async (user_id:number,points:number): Promise<User> => {

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where:{
      user_id:user_id
    }
  })
  const newPoints = user?.points ? user?.points + points : 0;
  const newUser = {...user, points:newPoints}
  if(newPoints > 0){
    const _user = await userRepository.save(newUser)
  }

  const userUpdate = await userRepository.findOneBy({user_id})

  return userUpdate!;

}

export default updateUserAddPointsService;
