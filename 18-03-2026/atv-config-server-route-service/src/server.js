import express from 'express'
import studentRoutes from './routes/studentRoutes.js'
const app = express()
app.use(express.json())
const port = 3000

app.get("/", (req, res) => {
    res.json("Olá, mundo!")
})

app.use("/students", studentRoutes)

app.listen(port, () => {
    console.log(`O servidor está sendo rodado na porta: http://localhost:${port}`)
})