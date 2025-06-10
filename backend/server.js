// const express = require("express")
import express from "express"
import notesRoutes from "./routes/notesRoutes.js"

const app = express()

app.use("/api/notes", notesRoutes)

app.listen(5001, () => {
    console.log("Servidor de Express iniciado en Puerto: 5001")
})