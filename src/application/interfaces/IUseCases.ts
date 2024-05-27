import {IListUsersUsecase} from '../../domain/useCaseInterface/IListUsersUsecase'
import { IDependencies } from './IDependencies'

export interface IUseCases {
    listUsersUseCase:(dependencies: IDependencies) => IListUsersUsecase
}