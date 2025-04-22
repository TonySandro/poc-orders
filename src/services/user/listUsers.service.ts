import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/user";

const listUsersService = async () :Promise<IUserRequest[]> => {
    const userRepository = AppDataSource.getRepository(User)
    const response = await userRepository.find()
    const users = response.map(user => {
      return user;
    })
    return users ? users : [];
}

export default listUsersService;
