import { IDependencies } from "../../../application/interfaces/IDependencies";
import {listProductContoller} from './listUsers'

export const controllers = (dependencies:IDependencies) => {
    return {
        listUsers:listProductContoller(dependencies)
    }
}