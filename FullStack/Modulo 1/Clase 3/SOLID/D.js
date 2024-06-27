class IRepositorio {
    guardar(datos) {
        throw new Error("Este método debe ser implementado por subclases");
    }
}

class RepositorioSQL extends IRepositorio {
    guardar(datos) {
        // Implementación para guardar en SQL
    }
}

class Servicio {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }

    guardarDatos(datos) {
        this.repositorio.guardar(datos);
    }
}

// Uso
const repositorio = new RepositorioSQL();
const servicio = new Servicio(repositorio);
servicio.guardarDatos({ nombre: "John", salario: 5000 });
