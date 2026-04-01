import filmes from "../config/db.js";

class FilmeService {
    getAll() {
        return filmes
    }
    getById(id) {
        return filmes.find(filme => filme.id === id)
    }
}

export const filmeService = new FilmeService;