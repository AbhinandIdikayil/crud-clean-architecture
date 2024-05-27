import {IUseCases} from './IUseCases'
import {IRepositories} from './IRepositories'

export interface IDependencies {
    respositories: IRepositories | any,
    useCases:IUseCases
}