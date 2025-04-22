import AppDataSource from "../../data-source";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { IUserLogin } from "../../interfaces/user";
import { User } from "../../entities/user.entity";
import { compare } from "bcrypt";


const loginService = async (data: IUserLogin): Promise<String> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email: data.email });

  let matchPass;
  if (user) {
    matchPass = await compare(data.password.toString(), user.password.toString());
  }

  if (!matchPass) {
    return "Password informado está incorreto"
  }

  const token = jwt.sign(
    {
      id: user!.user_id,
      name: user!.name,
      role:user!.role
    },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "24h",
      subject: user!.user_id.toString(),
    }
  );

  return token;
};

export default loginService;
