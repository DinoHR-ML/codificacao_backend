import { pacientesService } from "../service/user.service.js";
import express from 'express'

const router = express.Router();

router.get("/", (req, res) => {
    const data = pacientesService.getAll()
    res.json(data)
})

router.post("/", (req, res) => {
    const { paciente } = req.body;

    if (!paciente) {
        return res.status(404).json({ error: "Informe o nome do paciente" });
    }

    const novoPaciente = pacientesService.create(paciente);

    res.json(novoPaciente);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const paciente = pacientesService.getById(id);

    if (!paciente) {
        return res.status(404).json({ error: "Paciente não encontrado" });
    }

    res.json(paciente);
});

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { paciente } = req.body;
    const pacienteAtualizado = pacientesService.update(id, paciente);

    if (!pacienteAtualizado) {
        return res.status(404).json({ error: "Paciente não encontrado" });
    }

    res.json(pacienteAtualizado);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const pacienteRemovido = pacientesService.delete(id);

    if (!pacienteRemovido) {
        return res.status(404).json({ error: "Paciente não encontrado" });
    }

    res.json({ message: "Paciente removido com sucesso" });
});

export default router;