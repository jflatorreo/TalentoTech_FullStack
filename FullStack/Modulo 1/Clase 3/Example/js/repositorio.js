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


// Implementación de RepositorioMongo que Implementa IRepositorio
class RepositorioMongo extends IRepositorio {
    constructor(url, dbName) {
        super();
        this.url = url;
        this.dbName = dbName;
    }

    async guardar(datos) {
        const client = new MongoClient(this.url);
        try {
            await client.connect();
            const db = client.db(this.dbName);
            const collection = db.collection('ordenes');
            await collection.insertOne(datos);
            console.log("Datos guardados en MongoDB");
        } finally {
            await client.close();
        }
    }

    async obtener(id) {
        const client = new MongoClient(this.url);
        try {
            await client.connect();
            const db = client.db(this.dbName);
            const collection = db.collection('ordenes');
            const result = await collection.findOne({ id: id });
            console.log("Datos obtenidos de MongoDB:", result);
            return result;
        } finally {
            await client.close();
        }
    }
}

// Ejemplo de uso
//const repositorio = new RepositorioMongo('mongodb://localhost:27017', 'mi_base_de_datos');
//repositorio.guardar({ ejemplo: "datos de ejemplo" });
//repositorio.obtener(1);

