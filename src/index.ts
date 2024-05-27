import app from "./presentation/webserver";
import {dbConnect} from './infrastructure/database/mongodb/dbConnection'
(async () => {
    app;
    await dbConnect()
})()