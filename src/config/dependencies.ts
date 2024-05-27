import * as useCases from "../application/useCases";
import { IDependencies } from '../application/interfaces/IDependencies'
import * as respositories from '../infrastructure/database/mongodb/respositories'


export const dependencies: IDependencies = {
    useCases,
    respositories
}

