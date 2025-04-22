import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/errors";
import { IUserUpdateResquest } from "../../interfaces/user";

const updateUserService = async ( userId:number,user_request: IUserUpdateResquest): Promise<User> => {
  if (!user_request) {
    throw new AppError("Missing Params", 401);
  }
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ user_id: userId });
  if (!user) {
    throw new AppError("User not found", 404);
  }
  const newObj = {
    ...user,
    ...user_request,
  };

  await userRepository.save(newObj);

  return newObj

}


export default updateUserService;
