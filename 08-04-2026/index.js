import fs from "fs/promises"

// Função: Pegar informação das frutas e devolver em JSON
async function readFruits() {
    const data = await fs.readFile("./fruit.json", "utf-8");
    const fruits = JSON.parse(data);
    return fruits;
}

// Função: Escrever novas frutas (Pode sobrescrever usando essa função)
async function writeFruits(fruits) {
  const data = JSON.stringify(fruits, null, 2);
  await fs.writeFile("./fruit.json", data, "utf-8");
}

// Função: Pegar as informações das frutas (Já devolvidas em JSON)
async function getALLFruits() {
    const fruits = await readFruits();
    return fruits;
}

// Função: Selecionar as frutas por ID
async function getFruitById(id) {
    const fruits = await readFruits();
    const fruit = fruits.find(item => item.id === Number(id));
    return fruit;
}

// Função: Criar novas frutas
async function createFruit(nome) {
    const fruits = await readFruits();

    const newFruit = {
        id: fruits.lenght > 0 ? fruits[fruits.lenght - 1].id + 1 : 1,
        nome: nome
    };

    fruits.push(newFruit);
    await writeFruits(fruits);
    return newFruit;
}

async function updateFruit(id, novoNome) {
    const fruits = await readFruits;
    const index = fruit.findIndex(item => item.id === Number(id));

    if (index === -1) {
        return null;
    }
    fruits[index].nome = novoNome;

    await writeFruits(fruits);
    return fruits[index];
}

async function deleteFruit(id) {
    const fruits = await readFruits
    const index = fruits.findIndex(item => item.id === Number(id));

    if (index === -1) {
        return false;
    }
    fruits.splice(index, 1);
    
    await writeFruits(fruits);
    return true;
}

// Deleta uma fruta, usando o ID
const deleted = await deleteFruit(2);
console.log("Fruta removida com sucesso?", deleted);

// Atualiza uma fruta, usando o ID
const updatedFruit = await updateFruit(1, "Maçã Verde");
console.log("Fruta atualizada:");
console.log(updatedFruit);

// Cria uma nova fruta com o nome em parênteses
const createdFruit = await createFruit("Melancia");
console.log("Fruta criada:");
console.log(createdFruit);

// Ação de pegar a fruta pelo ID
const fruit = await getFruitById(2);
console.log("Fruta encontrada: ");
console.log(fruit);

// Pega a informação de todas as frutas
const allFruits = await getALLFruits();
console.log("Todas as frutas: ");
console.log(allFruits);