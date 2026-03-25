import filmes from "../config/db.js";

class FilmeService {
    getAll() {
        return filmes
    }
}

export const filmeService = new FilmeService;