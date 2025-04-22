import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/user";
import { Address } from "../../entities/address.entity";
import { hash } from "bcrypt";
import { AppError } from "../../errors/errors";

const createUserService = async ({  address,
    ...dataUser}:IUserRequest): Promise<User> => {
    const usersRepository = AppDataSource.getRepository(User);
    const addressesRepository = AppDataSource.getRepository(Address);
  
    const { email, cpf } = dataUser;
  
    const userInDatabase = await usersRepository
      .createQueryBuilder("user")
      .where("user.email = :email", { email })
      .orWhere("user.cpf = :cpf", { cpf })
      .getOne();
  
    if (userInDatabase)
      throw new AppError("User already exist's in our database.", 409);
  
    const newAddress = addressesRepository.create(address);
    await addressesRepository.save(newAddress);
    const hashedPassword = await hash(dataUser.password, 10);
    const newUser = usersRepository.create({
      ...dataUser,
      address: newAddress,
      password:hashedPassword
    });
  
    await usersRepository.save(newUser);
    return newUser;

}

export default createUserService;
