import express from 'express'
import {FilmeServices} from "../services/filmeService.js";
const route = express.Router()

route.get("/", (req, res) => {
    res.json(FilmeServices.getAll())
})

export default route