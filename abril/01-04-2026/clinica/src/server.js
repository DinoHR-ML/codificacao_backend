import express from 'express'
import router from './route/user.routes.js'
const userRoutes = router
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.json("Hello, World!")
})

app.use('/pacientes', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
