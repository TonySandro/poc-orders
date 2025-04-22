import AppDataSource from "../../data-source";
import { Solicitation } from "../../entities/solicitation.entity";

const deleteSolicitationService = async (solicitation_id: number) => {

  const servicoRepository = AppDataSource.getRepository(Solicitation);

  await servicoRepository.delete(solicitation_id)
  
  return "Deletado com sucesso"
}


export default deleteSolicitationService;
