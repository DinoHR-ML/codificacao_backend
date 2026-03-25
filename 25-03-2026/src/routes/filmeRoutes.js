import express from 'express'
import {filmeService} from "../service/filmeService.js";
const route = express.Router()

route.get("/", (req, res) => {
    res.json(filmeService.getAll())
})

export default route