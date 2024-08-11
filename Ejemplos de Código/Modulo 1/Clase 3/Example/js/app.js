document.addEventListener("DOMContentLoaded", function () {
    const producto1 = new Producto(1, "Laptop", 1500000);
    const producto2 = new Producto(2, "Ratón", 25000);

    const item1 = new OrdenItem(producto1, 1);
    const item2 = new OrdenItem(producto2, 2);

    const orden = new Orden(1, [item1, item2]);

    // Ejemplo de uso
    //const repositorio = new RepositorioMongo('mongodb://localhost:27017', 'mi_base_de_datos');
    //repositorio.guardar({ ejemplo: "datos de ejemplo" });
    //repositorio.obtener(1);

    const repositorioSQL = new RepositorioSQL();
    const servicioOrden = new ServicioOrden(repositorioSQL);

    const totalOrden = servicioOrden.procesarOrden(orden);

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>El total de la orden es: $${totalOrden}</p>`;
});
