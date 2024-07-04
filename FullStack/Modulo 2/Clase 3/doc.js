// script.js

// Función de complejidad O(1)
// Esta función siempre realiza una operación constante, independientemente del tamaño del input.
function constantTimeOperation() {
    return "Operación de tiempo constante";
}

// Función de complejidad O(n)
// Esta función suma los primeros n números en un array, lo que requiere iterar sobre cada elemento una vez.
function linearTimeOperation(size) {
    const array = Array.from({ length: size }, (_, i) => i + 1);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    // Fórmula: T(n) = O(n)
    return sum;
}

// Función de complejidad O(n^2)
// Esta función genera pares coordenados en una matriz, requiriendo iterar sobre cada par de elementos.
function quadraticTimeOperation(size) {
    let result = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            result += `${i},${j} `;
        }
    }
    // Fórmula: T(n) = O(n^2)
    return result;
}

// Función de complejidad O(log n)
// Esta función realiza una búsqueda binaria en un array ordenado, dividiendo el rango de búsqueda a la mitad en cada paso.
function logTimeOperation(size) {
    const array = Array.from({ length: size }, (_, i) => i + 1);
    let low = 0;
    let high = array.length - 1;
    let target = Math.floor(Math.random() * size);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === target) {
            // Fórmula: T(n) = O(log n)
            return `Elemento ${target} encontrado en la posición ${mid}`;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return `Elemento ${target} no encontrado`;
}

// Medición de tiempos de ejecución
function measureTime(callback, ...args) {
    const start = performance.now();
    const result = callback(...args);
    const end = performance.now();
    return { time: end - start, result };
}

// Ejecutar función de complejidad O(1)
function runO1() {
    const { time, result } = measureTime(constantTimeOperation);
    document.getElementById('outputO1').textContent = `Resultado: ${result}\nTiempo de ejecución: ${time.toFixed(4)} ms\nComplejidad: O(1)`;
}

// Ejecutar función de complejidad O(n)
function runOn() {
    const size = 10000;
    const { time, result } = measureTime(linearTimeOperation, size);
    document.getElementById('outputOn').textContent = `Suma de los primeros ${size} números: ${result}\nTiempo de ejecución: ${time.toFixed(4)} ms\nComplejidad: O(n)`;
    updateChart('O(n)', time);
}

// Ejecutar función de complejidad O(n^2)
function runOn2() {
    const size = 100;
    const { time, result } = measureTime(quadraticTimeOperation, size);
    document.getElementById('outputOn2').textContent = `Par coordenado para tamaño ${size}: ${result.substring(0, 100)}...\nTiempo de ejecución: ${time.toFixed(4)} ms\nComplejidad: O(n^2)`;
    updateChart('O(n^2)', time);
}

// Ejecutar función de complejidad O(log n)
function runOlogn() {
    const size = 10000;
    const { time, result } = measureTime(logTimeOperation, size);
    document.getElementById('outputOlogn').textContent = `Resultado de búsqueda: ${result}\nTiempo de ejecución: ${time.toFixed(4)} ms\nComplejidad: O(log n)`;
    updateChart('O(log n)', time);
}

// Gráfico de complejidad
let chartData = {
    labels: [],
    datasets: [{
        label: 'Tiempo de ejecución (ms)',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

let complexityChart = new Chart(document.getElementById('complexityChart'), {
    type: 'line',
    data: chartData,
    options: {
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Ejecuciones'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Tiempo (ms)'
                }
            }
        }
    }
});

function updateChart(label, time) {
    chartData.labels.push(label);
    chartData.datasets[0].data.push(time);
    complexityChart.update();
}
