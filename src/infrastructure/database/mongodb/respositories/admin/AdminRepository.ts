import { UserModel } from '../../models/UserModel'
import { IUserEnitity } from '../../../../../domain/entities/UserEnitity'

export const listUsers = async (): Promise<IUserEnitity[] | null>  =>  {
    try {
        const user: IUserEnitity[] = await UserModel.find()
        return user
    } catch (error) {
        console.log(error)
        throw new Error('failed to list users')
    }
}