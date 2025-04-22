import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const updateUserSubPointsService = async (user_id:number,points:number): Promise<User> => {

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where:{
      user_id:user_id
    }
  })
  if(!user){
    return new User
  }
  if(user?.points >= points){
    const newPoints = user?.points ? user?.points - points : 0;
    const newUser = {...user, points:newPoints}
    if(newPoints >= 0){
      const _user = await userRepository.save(newUser)
    }
    const userUpdate = await userRepository.findOneBy({user_id})
  
    return userUpdate!;
  }

  return new User()

}

export default updateUserSubPointsService;
