import connectDB from "./db/index.js";
import dotenv from 'dotenv';
import { app } from "./app.js";
import Env from "./config/confo.js";
//path to env
dotenv.config({
    path: '../env',
});
console.log(Env.PORT)


connectDB().then(() => {
    app.on("error", (error) => {
        console.log(error)
        process.exit(1)
    })
    app.listen(Env.PORT, () => {
        console.log(`Server is running on port ${Env.PORT}`)
    })

}).catch((err) => {
    console.log("connection failed ", err)
});




// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then(() => {
//             console.log("Database is connected")
//         })
//         app.on("error", (error) => {
//             console.log(error)
//             throw new Error("Server is not connected")
//         })
//         const port = process.env.PORT || 3000;
//         app.listen(port, () => {
//             console.log(`Server is running on port ${port}`)
//         })

//     } catch (error) {
//         console.log(error)
//         throw new Error("Database is not connected")
//     }
// })()
