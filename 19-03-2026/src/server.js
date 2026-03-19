import express from 'express'
import route from './routes/sizeRoutes.js'
const app = express()
app.use(express.json())
const PORT = 3000


app.get("/", (req, res) => {
    res.json("Hello, World!" )
})

app.use("/size", route)

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`)
})