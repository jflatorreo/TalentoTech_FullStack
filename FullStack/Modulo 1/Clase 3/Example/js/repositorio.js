class IRepositorio {
    guardar(datos) {
        throw new Error("Este método debe ser implementado por subclases");
    }

    obtener(id) {
        throw new Error("Este método debe ser implementado por subclases");
    }
}

class RepositorioSQL extends IRepositorio {
    guardar(datos) {
        console.log("Datos guardados en la base de datos SQL");
    }

    obtener(id) {
        console.log("Datos obtenidos de la base de datos SQL");
    }
}
