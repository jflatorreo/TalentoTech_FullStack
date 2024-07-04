// script.js

// Función de complejidad O(1)
function constantTimeOperation() {
    return "Operación de tiempo constante";
}

// Función de complejidad O(n)
function linearTimeOperation(size) {
    const array = Array.from({ length: size }, (_, i) => i + 1);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Función de complejidad O(n^2)
function quadraticTimeOperation(size) {
    let result = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            result += `${i},${j} `;
        }
    }
    return result;
}

// Función de complejidad O(log n)
function logTimeOperation(size) {
    const array = Array.from({ length: size }, (_, i) => i + 1);
    let low = 0;
    let high = array.length - 1;
    let target = Math.floor(Math.random() * size);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === target) {
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
    const inputSize = document.getElementById('inputSizeO1').value;
    const { time, result } = measureTime(constantTimeOperation);
    document.getElementById('outputO1').textContent = `Resultado: ${result}\nTiempo de ejecución: ${time.toFixed(4)} milisegundos`;
}

// Ejecutar función de complejidad O(n)
function runOn() {
    const inputSize = document.getElementById('inputSizeOn').value;
    const { time, result } = measureTime(linearTimeOperation, inputSize);
    document.getElementById('outputOn').textContent = `Resultado: ${result}\nTiempo de ejecución: ${time.toFixed(4)} milisegundos`;
}

// Ejecutar función de complejidad O(n^2)
function runOn2() {
    const inputSize = document.getElementById('inputSizeOn2').value;
    const { time, result } = measureTime(quadraticTimeOperation, inputSize);
    document.getElementById('outputOn2').textContent = `Resultado: Primeros 100 elementos: ${result}\nTiempo de ejecución: ${time.toFixed(4)} milisegundos`;
}

// Ejecutar función de complejidad O(log n)
function runOlogn() {
    const inputSize = document.getElementById('inputSizeOlogn').value;
    const { time, result } = measureTime(logTimeOperation, inputSize);
    document.getElementById('outputOlogn').textContent = `Resultado: ${result}\nTiempo de ejecución: ${time.toFixed(4)} milisegundos`;
}

// Funciones para el paso a paso

function stepOn() {
    const inputSize = document.getElementById('inputSizeStepOn').value;
    const array = Array.from({ length: inputSize }, (_, i) => i + 1);
    let sum = 0;
    let stepResult = '';
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        stepResult += `Sumando ${array[i]}, suma parcial: ${sum}\n`;
    }
    document.getElementById('stepOutputOn').textContent = stepResult;
}

function stepOn2() {
    const inputSize = document.getElementById('inputSizeStepOn2').value;
    let stepResult = '';
    for (let i = 0; i < inputSize; i++) {
        for (let j = 0; j < inputSize; j++) {
            stepResult += `Iteración (${i},${j})\n`;
        }
    }
    document.getElementById('stepOutputOn2').textContent = stepResult;
}

function stepOlogn() {
    const inputSize = document.getElementById('inputSizeStepOlogn').value;
    const array = Array.from({ length: inputSize }, (_, i) => i + 1);
    const target = Math.floor(Math.random() * inputSize);
    let low = 0;
    let high = array.length - 1;
    let stepResult = '';

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === target) {
            stepResult += `Elemento ${target} encontrado en la posición ${mid}\n`;
            break;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        stepResult += `Buscando en la mitad ${mid}, valor actual: ${array[mid]}\n`;
    }

    if (low > high) {
        stepResult += `Elemento ${target} no encontrado\n`;
    }

    document.getElementById('stepOutputOlogn').textContent = stepResult;
}

// Gráfico de complejidades
const complexityChart = new Chart(document.getElementById('complexityChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['O(1)', 'O(n)', 'O(n²)', 'O(log n)'],
        datasets: [{
            label: 'Tiempo de Ejecución (ms)',
            data: [0, 0, 0, 0],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Tiempo de Ejecución (ms)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Complejidad'
                }
            }
        }
    }
});

// Actualizar gráfico con los tiempos de ejecución
function updateChart(o1Time, onTime, on2Time, olognTime) {
    complexityChart.data.datasets[0].data = [o1Time, onTime, on2Time, olognTime];
    complexityChart.update();
}

