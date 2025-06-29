// const express = require("express")
import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// connectDB()

// middleware
app.use(express.json()) // middleware para poder Destructurar datos/valores de req.body
app.use(rateLimiter) // middleware de límite de velocidad

// middleware personalizado de prueba
// app.use((req, res, next) => {
//     console.log(`Nuevo Req Request/Pedido - Req Método es ${req.method} - Req URL es ${req.url}`)
//     next()
// })

// rutas API
app.use("/api/notes", notesRoutes)

// app.listen(PORT, () => {
//     console.log(`Servidor de Express iniciado en Puerto: ${PORT}`)
// })

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor de Express iniciado en Puerto: ${PORT}`)
    })
})