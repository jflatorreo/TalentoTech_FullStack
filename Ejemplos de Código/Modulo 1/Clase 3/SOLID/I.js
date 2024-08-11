class ITrabajador {
    trabajar() {
        throw new Error("Este método debe ser implementado por subclases");
    }
}

class IComensal {
    comer() {
        throw new Error("Este método debe ser implementado por subclases");
    }
}

class Empleado extends ITrabajador {
    trabajar() {
        // Implementación de trabajar
    }
}

class Empleado extends IComensal {
    comer() {
        // Implementación de trabajar
    }
}

class EmpleadoComensal extends ITrabajador, IComensal {
    trabajar() {
        // Implementación de trabajar
    }

    comer() {
        // Implementación de comer
    }
}
