import mongoose, { Schema, model } from 'mongoose'
import {IUserEnitity} from '../../../../domain/entities/UserEnitity'

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

export const UserModel = mongoose.model<IUserEnitity>('user', userSchema)