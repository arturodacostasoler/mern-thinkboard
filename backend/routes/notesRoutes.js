import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send("Acabas de buscar las Notas")
})

router.post("/", (req, res) => {
    res.status(200).send("Nota creada exitosamente")
})

router.put("/:id", (req, res) => {
    res.status(200).send("Nota actualizada exitosamente")
})

router.delete("/:id", (req, res) => {
    res.status(200).send("Nota borrada exitosamente")
})

export default router