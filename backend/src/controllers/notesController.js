import Note from "../models/Note.js"

// export const getAllNotes = (req, res) => {
//     res.status(200).send("Acabas de buscar las Notas")
// }

// export async function getAllNotes(req, res) {
export async function getAllNotes(_, res) {
    // res.status(200).send("Acabas de buscar las Notas")
    try {
        const notes = await Note.find().sort({ createdAt: -1 }) //-1 para ordenar más recientes primero
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error en controlador getAllNotes", error)
        res.status(500).json({ message: "Error Interno en Servidor" })
    }
}

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({ message: "Nota no encontrada" })
        res.status(200).json(note)
    } catch (error) {
        console.error("Error en controlador getNoteById", error)
        res.status(500).json({ message: "Error Interno en Servidor" })
    }
}

export async function createNote(req, res) {
    // res.status(200).send("Nota creada exitosamente")
    try {
        const { title, content } = req.body
        // console.log { title, content }
        // const newNote = new Note({ title: title, content: content })
        const note = new Note({ title, content })
        const savedNote = await note.save()
        // res.status(201).json({ message: "Nota creada exitosamente" })
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("Error en controlador createNote", error)
        res.status(500).json({ message: "Error Interno en Servidor" })
    }
}

export async function updateNote(req, res) {
    // res.status(200).send("Nota actualizada exitosamente")
    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true })
        if (!updatedNote) return res.status(404).json({ message: "Nota no encontrada" })
        // res.status(200).json({ message: "Nota actualizada exitosamente" })
        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("Error en controlador updateNote", error)
        res.status(500).json({ message: "Error Interno en Servidor" })
    }
}

export async function deleteNote(req, res) {
    // res.status(200).send("Nota borrada exitosamente")
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) return res.status(404).json({ message: "Nota no encontrada" })
        res.status(200).json({ message: "Nota borrada exitosamente" })
        // res.status(200).json(deletedNote)
    } catch (error) {
        console.error("Error en controlador deleteNote", error)
        res.status(500).json({ message: "Error Interno en Servidor" })
    }
}