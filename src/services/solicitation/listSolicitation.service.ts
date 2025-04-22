import AppDataSource from "../../data-source";import { Solicitation } from "../../entities/solicitation.entity";

const listSolicitationService = async () :Promise<Solicitation[]> => {
    const solicitationRepository = AppDataSource.getRepository(Solicitation)
    const response = await solicitationRepository.find()
    const solicitation = response.map(element => {
      return element;
    })

    return solicitation ? solicitation : [];
}

export default listSolicitationService;
