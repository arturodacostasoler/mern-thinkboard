import mongoose from "mongoose";

//1- Crear Schema
//2- Crear Modelo (Model) basado en el Schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },

    },
    { timestamps: true } // campos createdAt y updatedAt
)

const Note = mongoose.model("Note", noteSchema)

export default Note