import pacientes from '../config/db.js'

class PacientesService {
    getAll() {
        return pacientes;
    }

    getById(id) {
        return pacientes.find((paciente) => paciente.id === id);
    }

    create(paciente) {
        const novoPaciente = {
            id: pacientes.length > 0 ? pacientes[pacientes.length -1].id + 1 : 1,
            paciente: paciente
        }

        pacientes.push(novoPaciente)
        
        return novoPaciente
    }

    update(id, dadosAtualizados) {
        const index = pacientes.findIndex((p) => p.id === id);

        if (index === -1) {
            throw new Error("Paciente não encontrado");
        };

        pacientes[index] = {
            ...pacientes[index],
            ...dadosAtualizados,
            id: pacientes[index].id
        };

        return pacientes[index];
    }

    delete(id) {
        const index = pacientes.findIndex((p) => p.id === id);

        if (index === -1) {
            throw new Error("Paciente não encontrado");
        }

        const [pacienteRemovido] = pacientes.splice(index, 1);

        return pacienteRemovido;
    }
}


export const pacientesService = new PacientesService();