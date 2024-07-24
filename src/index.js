import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config({
    path: '../env',
});

connectDB();



//database is always in another server
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
