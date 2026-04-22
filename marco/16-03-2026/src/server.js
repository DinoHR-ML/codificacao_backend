const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

let frutas = [
  {id: 1, name: "banana", price:5.00},
  {id: 2, name: "maçã", price:3.00},
  {id: 3, name: "tomate", price:2.50},
]

app.get('/frutas', (req, res) => {
  res.json({
    success: true,
    data: frutas,
  })
})

app.get('/frutas/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const fruta = frutas.find(a => a.id === id)
    if(!fruta) {
      return res.status(404).json({
        success: false,
        mesage: 'Fruta não encontrada',
      })
    } res.json({
      success: true,
      data: fruta,
    })
})

app.listen(port, () => {
  console.log(`O servidor está sendo rodado na porta: ${port}`)
})
