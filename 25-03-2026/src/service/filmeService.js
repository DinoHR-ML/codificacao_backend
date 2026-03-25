import filmes from "../config/db";

class FilmeService {
    getAll() {
        return filmes
    }
}

const filmeService = new FilmeService;

export default filmeService;