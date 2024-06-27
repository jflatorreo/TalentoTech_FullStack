// Clase abstracta Atraccion
class Atraccion {
    constructor(nombre, capacidad, tiempoEspera) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.tiempoEspera = tiempoEspera;
    }

    iniciarRecorrido() {
        throw new Error("Método abstracto");
    }

    finalizarRecorrido() {
        throw new Error("Método abstracto");
    }

    describirAtraccion() {
        throw new Error("Método abstracto");
    }
}

// Interfaz Mantenible
class Mantenible {
    realizarMantenimiento() {
        throw new Error("Método abstracto");
    }

    verificarSeguridad() {
        throw new Error("Método abstracto");
    }
}

// MontañaRusa
class MontañaRusa extends Atraccion {
    constructor(nombre, capacidad, tiempoEspera, alturaMinima) {
        super(nombre, capacidad, tiempoEspera);
        this.alturaMinima = alturaMinima;
    }

    iniciarRecorrido() {
        return `¡La montaña rusa ${this.nombre} inicia su recorrido!`;
    }

    finalizarRecorrido() {
        return `La montaña rusa ${this.nombre} ha completado su recorrido.`;
    }

    describirAtraccion() {
        return `${this.nombre} es una emocionante montaña rusa con una altura mínima de ${this.alturaMinima}cm.`;
    }

    realizarMantenimiento() {
        return `Realizando mantenimiento en la montaña rusa ${this.nombre}.`;
    }

    verificarSeguridad() {
        return `Verificando sistemas de seguridad de la montaña rusa ${this.nombre}.`;
    }
}

// ParqueDeDiversiones
class ParqueDeDiversiones {
    constructor() {
        this.atracciones = [];
    }

    añadirAtraccion(atraccion) {
        this.atracciones.push(atraccion);
    }

    removerAtraccion(nombreAtraccion) {
        this.atracciones = this.atracciones.filter(a => a.nombre !== nombreAtraccion);
    }

    calcularTiempoEsperaPromedio() {
        if (this.atracciones.length === 0) return 0;
        const total = this.atracciones.reduce((sum, a) => sum + a.tiempoEspera, 0);
        return total / this.atracciones.length;
    }

    iniciarTodasLasAtracciones() {
        return this.atracciones.map(a => a.iniciarRecorrido());
    }
}

// Visitante
class Visitante {
    constructor(nombre, altura, edad) {
        this.nombre = nombre;
        this.altura = altura;
        this.edad = edad;
    }

    puedeAcceder(atraccion) {
        if (atraccion instanceof MontañaRusa) {
            return this.altura >= atraccion.alturaMinima;
        }
        // Añadir más condiciones para otros tipos de atracciones
        return true;
    }
}

// Ejemplo de uso
function main() {
    const parque = new ParqueDeDiversiones();

    const montañaRusa = new MontañaRusa("Dragón de Fuego", 30, 45, 140);
    parque.añadirAtraccion(montañaRusa);

    const visitante = new Visitante("Ana", 150, 25);

    console.log(montañaRusa.describirAtraccion());
    console.log(montañaRusa.iniciarRecorrido());
    console.log(montañaRusa.realizarMantenimiento());

    console.log(`Tiempo de espera promedio: ${parque.calcularTiempoEsperaPromedio()} minutos`);

    if (visitante.puedeAcceder(montañaRusa)) {
        console.log(`${visitante.nombre} puede acceder a ${montañaRusa.nombre}`);
    } else {
        console.log(`${visitante.nombre} no cumple con los requisitos para ${montañaRusa.nombre}`);
    }

    console.log(parque.iniciarTodasLasAtracciones());
}

main();