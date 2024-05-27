import {IUserEnitity} from '../../domain/entities/UserEnitity'

export interface IRepositories {
    listUsers:() => Promise<IUserEnitity | null>
}