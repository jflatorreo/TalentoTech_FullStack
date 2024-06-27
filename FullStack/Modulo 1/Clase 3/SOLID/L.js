class Animal {
    hacerSonido() {
        throw new Error("Este método debe ser implementado por subclases");
    }
}

class Perro extends Animal {
    hacerSonido() {
        return "Ladrar";
    }
}

class Gato extends Animal {
    hacerSonido() {
        return "Maullar";
    }
}

// Uso
const animales = [new Perro(), new Gato()];
animales.forEach(animal => console.log(animal.hacerSonido())); // "Ladrar", "Maullar"
