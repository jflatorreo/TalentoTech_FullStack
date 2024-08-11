class Orden {
    constructor(id, items) {
        this.id = id;
        this.items = items;
    }

    calcularTotal() {
        return this.items.reduce((total, item) => total + item.obtenerCosto(), 0);
    }
}
