import { Router } from "express";
import {IDependencies} from '../../application/interfaces/IDependencies'
import { controllers } from "../../presentation/controllers/admin";

export const userRoute = (dependencies:IDependencies)  => {
    const adminRoute = Router();
    const {listUsers}  = controllers(dependencies)
    adminRoute.route('/users').get(listUsers)

    return adminRoute
}