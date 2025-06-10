// export const getAllNotes = (req, res) => {
//     res.status(200).send("Acabas de buscar las Notas")
// }

export function getAllNotes(req, res) {
    res.status(200).send("Acabas de buscar las Notas")
}

export function createNote(req, res) {
    res.status(200).send("Nota creada exitosamente")
}

export function updateNote(req, res) {
    res.status(200).send("Nota actualizada exitosamente")
}

export function deleteNote(req, res) {
    res.status(200).send("Nota borrada exitosamente")
}