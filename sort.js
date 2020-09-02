function crearArregloAleatorio(minimo, maximo, longitud) {
    let resultado = [];
    for (let index = 0; index < longitud; index++) {
        let valor = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
        resultado.push(valor);
    }
    return resultado;
}

// Bubble sort
function ordenamientoBurbuja(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
}

let array = crearArregloAleatorio(15, 30, 10);

console.log(array)
ordenamientoBurbuja(array);
console.log(array);
