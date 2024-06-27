class Calculadora {
    calcular(operacion, a, b) {
        return operacion.calcular(a, b);
    }
}

class Suma {
    calcular(a, b) {
        return a + b;
    }
}

class Resta {
    calcular(a, b) {
        return a - b;
    }
}

// Uso
const calculadora = new Calculadora();
const suma = new Suma();
console.log(calculadora.calcular(suma, 5, 3)); // 8

const resta = new Resta();
console.log(calculadora.calcular(resta, 5, 3)); // 2
