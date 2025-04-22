import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (user_id: number) => {

  const userRepository = AppDataSource.getRepository(User);

  await userRepository.delete(user_id)
}

export default deleteUserService;
