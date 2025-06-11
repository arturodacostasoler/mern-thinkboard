import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongoose - Mongo DB conectado exitosamente - cluster0 - mern-thinkboard")
    } catch (error) {
        console.error("Error Mongoose - conectando a Mongo DB", error)
        process.exit(1) // 1 significa Exit with Failure - 0 significa Success
    }
}