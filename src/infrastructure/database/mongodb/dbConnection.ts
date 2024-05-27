import mongoose from 'mongoose'

export const dbConnect =  async () => {
    try {
        const mongoUri = `mongodb://localhost:27017/crudDB`

        await mongoose.connect(mongoUri)
        console.log('-- mongodb connected --')
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}