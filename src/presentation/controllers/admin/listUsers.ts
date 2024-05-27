import {Application , Request , Response , NextFunction} from 'express'
import { IDependencies } from '../../../application/interfaces/IDependencies'
import {IUserEnitity} from '../../../domain/entities/UserEnitity'


export const listProductContoller = (dependencies:IDependencies) => {
    const {useCases:{listUsersUseCase}} = dependencies
    return async(req:Request , res:Response ) => {
        try {
            const users:IUserEnitity | null = await listUsersUseCase(dependencies).execute();
            console.log(users)
            res.status(200).json(users)
        } catch (error:any) {
            throw new Error(error?.message)
        }
    }
}