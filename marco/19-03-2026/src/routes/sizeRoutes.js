import express from 'express'
import { SizeServices } from "../services/sizeService";
const route = express.Router()

route.get("/", (req, res) => {
    res.json(SizeServices.getAll())
})

export default route
