class ITrabajador {
    trabajar() {
        throw new Error("Este método debe ser implementado por subclases");
    }
}

class IComedor {
    comer() {
        throw new Error("Este método debe ser implementado por subclases");
    }
}

class Empleado extends ITrabajador {
    trabajar() {
        // Implementación de trabajar
    }
}

class EmpleadoComedor extends ITrabajador {
    trabajar() {
        // Implementación de trabajar
    }

    comer() {
        // Implementación de comer
    }
}
