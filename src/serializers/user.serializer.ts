import { z } from "zod";
import { addressCreateSerializer } from "./address.serializers";

const userCreateSerializer = z.object({
  name: z.string().max(256),
  email:z.string().max(100).email({ message: 'Adicione um email valido' }),
  birthDate:z.string(),
  cpf:z.string().min(14,{message:"Número de caracteres invalidos"}).max(14,{message:"Número maximo de caracteres antigido"}).nonempty("CPF não foi preenchido"),
  password:z.string().max(20),
  phone:z.string().max(20).optional(),
  role: z.string().max(3,{message:"Número maximo de caracteres antigido"}).nonempty("Role deve ser preenchida"),
  description: z.string().max(256).optional(),
  address: addressCreateSerializer,
});

export { userCreateSerializer};
