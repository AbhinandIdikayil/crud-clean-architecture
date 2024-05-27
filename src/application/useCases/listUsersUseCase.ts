import {IDependencies} from '../interfaces/IDependencies'


export const listUsersUseCase = (dependencies:IDependencies) => {
    const {respositories:{listUsers}} = dependencies
    return {
        execute:async() => {
            try {
                return await listUsers()
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}