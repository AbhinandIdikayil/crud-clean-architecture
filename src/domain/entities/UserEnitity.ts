import { ObjectId } from "mongoose";



export interface IUserEnitity {
    _id?: ObjectId,
    username: string,
    email: string,
    password: string
}