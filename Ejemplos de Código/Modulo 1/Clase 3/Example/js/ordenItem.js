class OrdenItem {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }

    obtenerCosto() {
        return this.producto.precio * this.cantidad;
    }
}
