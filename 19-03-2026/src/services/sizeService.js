const size = [
    {id: 1, size: 16, stile: "cm"},
    {id: 2, size: 13, stile: "cm"},
    {id: 3, size: 19, stile: "cm"},
]

class SizeServices {
    getAll() {
        return size;
    }
    getById(id) {
        return size.find(s => s.id === id);
    }
    getBySize(sizeValue) {
        return size.find(s => s.size === sizeValue);
    }
}
export const sizeService = new SizeServices;