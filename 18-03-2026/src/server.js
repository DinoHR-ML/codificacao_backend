import express from 'express'
const app = express()
app.use(express.json())
const port = 3000

app.get("/", (req, res) => {
    res.json("Olá, mundo!")
})

app.listen(port, () => {
    console.log(`O servidor está sendo rodado na porta: http://localhost:${port}`)
})