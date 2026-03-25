import express from 'express'
import route from './routes/filmeRoutes.js'
const app = express()
const PORT = 3000


app.get("/", (req, res) => {
    res.json("Hello, World!" )
})

app.use("/filme", route)


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta https://localhost:${PORT}`)
})