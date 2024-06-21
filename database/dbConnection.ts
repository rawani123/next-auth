
import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!) 
       const connection = mongoose.connection;

       connection.on('connected',( ) => {
        console.log("connnected to database")
       })

       connection.on('error',()=>{
        console.log("error in connecting database");
        process.exit()
       })


    } catch (error) {
        console.log("Sommeting went worng in db connection")
    }
}

export default dbConnection;