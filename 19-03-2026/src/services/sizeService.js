const size = [
    {id: 1, size: 16, stile: "cm"},
    {id: 2, size: 13, stile: "cm"},
    {id: 3, size: 19, stile: "cm"},
]

class SizeServices {
    getAll() {
        return size;
    }
}

export const sizeService = new SizeServices;