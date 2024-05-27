import express from "express";
import { Application } from "express-serve-static-core";
import { userRoute } from "../infrastructure/routes/UserRoute";
import {dependencies} from '../config/dependencies'

const app:Application = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(userRoute(dependencies))


app.listen(3000,() => {
    console.log(`server is runnning on ${3000}`)
})


export default app
