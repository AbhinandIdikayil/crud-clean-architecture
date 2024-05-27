import { IUserEnitity } from "../entities/UserEnitity";

export interface IListUsersUsecase{
    execute(): Promise<IUserEnitity | null>
}