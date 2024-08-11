class ServicioOrden {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }

    procesarOrden(orden) {
        const total = orden.calcularTotal();
        console.log(`El total de la orden es: $${total}`);
        this.repositorio.guardar(orden);
        return total;
    }
}
